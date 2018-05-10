# Welcome to js-cosmic-lib!

## What is js-cosmic-lib?

`js-cosmic-lib` implements the *Cosmic Link* protocol in JavaScript. The Cosmic
Link protocol allow to express a [Stellar](https://stellar.org) transaction as
an URI:

>
[https://cosmic.link/?payment&amount=10&destination=tips*cosmic.link](https://cosmic.link/?payment&amount=10&destination=tips*cosmic.link)

`js-cosmic-lib` is able to transform such link in a valid Stellar Transaction
object, and eventually sign it and send it. It can aswell transform a valid
Stellar Transaction into an URI so you can easily transmit it over mail,
textchat, website and so on. Additionaly, it offers to display those transaction
in a nicely formatted HTML/CSS DOM node.

The Cosmic Link protocol is site-agnostic, which means it works with any URI:

> https://mysite.org/?manageData&name=Country&value=Colombia

Custom URI schemes are handled as well, as everything actually happens in the
query string:

> stellar://?setOptions&lowThreshold=10

The basic idea here is that several service could act as authenticators and
offer to sign transaction submitted as cosmic links. As a cosmic link emitter,
you could either ask the user which authenticator he'd like to use, or rely
on [https://cosmic.link](https://cosmic.link).

The cosmic link website is proposed as the standard platform to handle those
links. It is both an educative and a redirecting service. cosmic.link doesn't
act as an authenticator itself, but propose a list of them from which the user
can choose, and eventually setup a permanent redirection.

To conclude, `js-cosmic-lib` allow both transaction emitters and transaction
signing services to implement this protocol easily.

## This is an Alpha release

This means that the library is not full-featured yet, and subject to changes. At
this time, the base is already well-structured; but changes in some feature may
still happens.

It also means this have not been extensively tested yet. If you encounter any
issue using this library, please report it here under the 'Issues' section so I
can make it right.

However, despite being flagged Alpha, the core functionnality is now fully
functionnal and early implementators may simply go ahead.

## Install

There's several way you can install this library. If you want to give it a try
you may simply link it from an HTML file.


```HTML
  <body>
  ....
    <!-- Best placed at the end of body to not delay page loading -->
    <script src="https://raw.githubusercontent.com/MisterTicot/js-cosmic-lib/0.2.2/cosmic-lib.js"></script>

    <!-- This would setup a space where your transaction will display automatically -->
    <div id="CL_transactionNode"></div>
  </body>
```

For production use, thought, it would be more secure and reliable to use your
own copy of the library. You can download the release bundle form Github or use
Git submodules:

```sh
git submodule add https://github.com/MisterTicot/js-cosmic-lib/
git submodule update --init
```

There's also a node module available:
```sh
npm install --save cosmic-lib
```

### Styling cosmic-lib HTML nodes

The styling sheet included in the Javascript module is also available at:

> https://raw.githubusercontent.com/MisterTicot/js-cosmic-lib/${version}/cosmic-lib.css

You can use it as a template to re-style how cosmic-lib display transactions
in your website. Simply make sure that your own stylesheet is loaded after
the cosmic-lib module.

## Cosmic links format

Cosmic link format is based on
[js-stellar-sdk](https://stellar.github.io/js-stellar-sdk/Operation.html). The
composite objects (asset, memo, signer, some price) have their field separated by
colons (:). The lists (asset path) are comma-separated. The only difference is
that timebounds are using [ISO date formatting]() for readability.

A cosmic link query start with the name of an operation, followed by
zero or more transaction fields and operation fields.

> https://cosmic.link?[operation]&[transactionField]=[value]&[operationField]=[value]

### Transaction fields

They are `network`, `source`, `memo`, `minTime`, `maxTime`, `fee`.
All of them are optional

Network can be either `public` or `testing`.

Memo can be of type `text`, `id`, `hash`, or `return` (which's also a hash) and
are written in the form:

> memo=type:value

`mintime` and `maxTime` should be writted as ISO dates as statted earlier:

> minTime=2017-03-03

> maxTime=2020-02-02T12:20

`fee` is the fees of the whole transaction and is here only for completeness.

### Operation fields

Those are the arguments of an operation. For example a `payment` operation needs
an `amount`, a `destination` and an `asset`. Some arguments may be optionals.
The rules are nearly the same than `js-stellar-sdk`; Additionally, `asset` may
be omitted when it is XLM.

> https://cosmic.link?payment&amount=5&destination=someone*example.org

`signers` should be written as follow:

> ...&signer=weight:type:value

If you need to check the syntax for each operation, you can consult the [debug page](https://misterticot.github.io/js-cosmic-lib/debug.html#2).

### Building cosmic links

In which cases should I use cosmic-lib to build cosmic links ?

* When you have an already working platform issuing various kind of transaction,
the easiest way to implement the cosmic link protocol would be to use cosmic-lib
to convert your Transaction objects into cosmic links, and offer the users to
sign their transactions using them.
* More generally, if your platform is going to issue transaction whose are made
of a wide variety of operations, you should use cosmic-lib.
* If you want to offer to sign the transactions, you could use cosmic-lib
aswell to handle this part.

In which cases should I not use cosmic-lib to build cosmic links ?

* If your service is issuing one or few type of transactions, it may be lighter
and easier to have some routine writting the cosmic link for you. Especially in
the case were you want to relly only on cosmic links. For example, if the only
kind of transaction you're issuing are payment transactions.

## Some example code

```javascript
/// Create a cosmic link from an URL:
var clink1 = new cosmicLib.CosmicLink(location.url, 'public', sourceAccount)
/// Create a cosmic link from a transaction XDR:
var clink2 = new cosmicLib.CosmicLink(XDR, 'test')
/// Create a cosmic link from a transaction object:
var clink3 = new cosmicLib.CosmicLink(transaction) // public network by default

/// Expose the transaction HTML nodes.
var bodyNode = document.getElementsByTagName('body')[0]
bodyNode.appendChild(clink1.transactionNode)
bodyNode.appendChild(clink2.transactionNode)

/// Translate the transaction into another format. All formats are proposed as
/// promise as address resolution may take some time.
clink1.getXdr().then(function(xdr) {
  console.log(xdr)
})
/// In JS6
const transaction = await clink2.getTransaction()
const uri = await clink3.getUri()

/// Sign and send
clink2.sign(secretSeed)
clink2.send()
```

## Contribute

Contributions are very welcome, be it either comments on the software or pull
request. I feel more confortable pulling patch than sharing the repository, so
if you'd like to join the project I invite you to fork and go ahead with
anything you can dream of.

I'm looking for some native english speaker who can check the text and help to
make it correct.

Another way to contribute to this project could be make your own service issuing
or handling cosmic links. Having a compatible wallet and exchange would be
awesome!

Right now, I'm also coding an authenticator which's available at
[https://stellar-authenticator.org](https://stellar-authenticator.org). Its
scope will be limited to account creation and transaction confirmation because
a small code base is easier to secure. If you want to, you can also check it
out and contribute there.

## Thank you!

And many thanks to the Stellar community at [Galactic
Talk](https://galactictalk.org) for the ideas and the advices that made this
project possible!

Especially to Torkus that bring the idea in the first place, and Dzham who
challenged the design.
