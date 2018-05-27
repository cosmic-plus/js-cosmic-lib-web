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

Stellar transaction XDR can alternatively be used:

> https://cosmic.link/?xdr=AAAAAMTBJz6NQu3FnhyNMC9EjGr4ypN3EMGkY20e2c/tzqLpAAAAZACJR8YAAAAKAAAAAAAAAAAAAAABAAAAAAAAAAoAAAAFSWRhZGUAAAAAAAABAAAAAjMyAAAAAAAAAAAAAA==&network=test

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
    <script src="https://raw.githubusercontent.com/MisterTicot/js-cosmic-lib/0.3.3/cosmic-lib.js"></script>

    <!-- This would setup a space where your transaction will display automatically -->
    <div id="CL_transactionNode"></div>
  </body>
```

For production use, though, it would be more secure and reliable to use your
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

Those are `network`, `source`, `memo`, `minTime`, `maxTime`, `fee`, `sequence`.
All of them are optional

Network can be either `public` or `test`.

Memo can be of type `text`, `id`, `hash`, or `return` (which's also a hash) and
are written in the form:

> memo=type:value

`mintime` and `maxTime` should be writted as ISO dates as statted earlier:

> minTime=2017-03-03

> maxTime=2020-02-02T12:20

`fee` is the fees of the whole transaction and is here only for completeness.
`sequence` is the sequence number and is here for completeness aswell.

### Operation fields

Those are the arguments of an operation. For example a `payment` operation needs
an `amount`, a `destination` and an `asset`. Some arguments may be optionals.
The rules are nearly the same than `js-stellar-sdk`; Additionally, `asset` may
be omitted when it is XLM.

> https://cosmic.link?payment&amount=5&destination=someone*example.org

Addresses can be either federated addresses or public keys.

Non-native `asset` should be written as follow:

> ...&asset=code:issuer

Asset path should be written as follow:

> ...&path=code1:issuer1,code2:issuer2,...,codeN:issuerN

`signers` should be written as follow:

> ...&signer=weight:type:value

If you need to check the syntax for each operation, you can consult the [debug page](https://misterticot.github.io/js-cosmic-lib/debug.html#2).

### XDR format

Cosmic links also support XDR:

> https://cosmic.link/?xdr=...&${options}

Valid options are:
* network=...: either `public` or `test`
* stripSource: remove original source account and allow any account to sign the
  transaction
* stripSequence: update the sequence number to current valid value
* stripSignatures: strip out signatures

At this time only transactions with one operation are supported.
Partially-signed transaction are supported.

### Which form to use ?

As a general rule, if you're issuing a transaction that is meant to be signed
by a given account, and meant to be signed once, the XDR form may fit better.

Conversely, if you're issuing a transaction that have meaning for everybody, the
"human"-form should be prefered (e.g.: signing to an inflation pool).

You may also prefer the "human"-form if you don't want to burden your service
with any big depend. This form can be written quite efficiently by simple
routines.

### cosmic-lib use cases

In which cases should I use cosmic-lib ?

* If you need a way to display transactions accurately & nicely.
* If you want to convert between XDR/transactions and query format.
* If you want to parse cosmic links and sign them at some point.

In which cases should I not use cosmic-lib to build cosmic links ?

* If you're already issuing XDR transactions, you may prefer to issue cosmic
links using the XDR form.
* If the transaction writing is simple enough that you can write them by yourself
with few simple routines.
* If having dependencies is an issue for you.

## Some example code

```javascript
var CosmicLink = cosmicLib.CosmicLink

/// Set default page for all futuer cosmic links.
CosmicLink.page = 'https:/mysite.org/parse'

/// Create a cosmic link from an URL:
var clink1 = new CosmicLink(location.url, 'public', sourceAccount)
/// Create a cosmic link from a transaction XDR:
var clink2 = new CosmicLink(XDR, 'test', { stripSource: true })
/// Create a cosmic link from a transaction object:
var clink3 = new CosmicLink(transaction) // public network by default

/// Expose the transaction HTML nodes.
var bodyNode = document.getElementsByTagName('body')[0]
bodyNode.appendChild(clink1.htmlNode)
bodyNode.appendChild(clink2.htmlNode)

/// Translate the transaction into another format. All formats are proposed as
/// promise as address resolution may take some time.
clink1.getXdr().then(function (xdr) {
  console.log(xdr)
})
/// In JS6
const transaction = await clink2.getTransaction()
const uri = await clink3.getUri()

/// Setting a handler that will be called each time a format get a new value
/// (for example XDR change after signing)
clink1.addFormatHandler('xdr', console.log)
clink2.addFormatHandler('query', updateQueryBox)

/// Sign and send
clink2.sign(secretSeed).then(function() {
  return clink2.send()
}).then(function (answer) {
  console.log(answer)
  console.log('Transaction validated')
}).catch(function (answer) {
  console.log(answer)
  console.log('Transaction rejected')
})
```

## Cheat sheet

```javascript
// --- Constructor ---
// new CosmicLink(uri, "[userNetwork]", "[userAddress]")
// new CosmicLink(query, "[userNetwork]", "[userAddress]")
// new CosmicLink(transaction, "[userNetwork]", "[userAddress]", {...options})
// new CosmicLink(xdr, "[userNetwork]", "[userAddress]", {...options})
//
// --- Options for transaction & xdr ---
// stripSource = true      < Strip out source account
// stripSequence = true    < Strip out sequence number
// stripSignatures = true  < Strip out signatures
// network = ...           < Specify a network for this transaction (kept in URI after conversion)
//
// --- Edit ---
// CosmicLink.parse(any-format, {...options})
// *CosmicLink.setField(field, value)
// *CosmicLink.addOperation({...params})
// *CosmicLink.changeOperation(index, {...params})
// *CosmicLink.removeOperation(index)
//
// --- Formats (get) ---
// CosmicLink.getUri()          < Return a promise of the URI string
// CosmicLink.getQuery()        < Return a promise of the query string
// CosmicLink.getJson()         < Return stringified JSON of the object
// CosmicLink.getTdesc()        < Return a promise of the transaction descriptor
// CosmicLink.getTransaction()  < Return a promise of the transaction
// CosmicLink.getXdr()          < Return a promise of the transaction's XDR
//
// --- Handlers ---
// CosmicLink.addFormatHandler(format, callback)
// CosmicLink.removeFormatHandler(format, callback)
// callback will receive event = { cosmicLink: ..., value: ..., error: ... }
//
// --- Datas ---           <<< Update everything on the go >>>
// CosmicLink.user         < User address
// *CosmicLink.aliases     < Local aliases for public keys
// CosmicLink.network      < Test/Public network
// CosmicLink.server       < The horizon server to use
// CosmicLink.status       < Status of the CosmicLink (valid or specific error)
// CosmicLink.errors       < An array of errors (or undefined if no error)
// CosmicLink.page         < The base URI, without the query
//
// --- Datas (asynchronous)
// CosmicLink.getSource()         < Transaction source
// CosmicLink.getSourceAccount()  < Transaction source account object
// CosmicLink.getSigners()        < Array of legit signers
//
// --- Tests ---
// CosmicLink.hasSigner(publicKey)   < Test if `publicKey` is a signer for CosmicLink
// CosmicLink.hasSigned(publicKey)   < Test if `publicKey` signature is available
//
// --- Actions ---
// CosmicLink.selectNetwork()  < Select CosmicLink network for Stellar SDK
// CosmicLink.sign(seed)       < Sign the transaction
// CosmicLink.send([server])   < Send the transaction to the network
//
// --- Events ---
// CosmicLink.onClick.type      < For onClick events on the HTML description
//
// --- HTML Nodes ---
// CosmicLink.htmlNode         < HTML element for CosmicLink
// CosmicLink.transactionNode  < HTML description of the transaction
// CosmicLink.signersNode      < HTML element for the signers list
// CosmicLink.statusNode       < HTML element for the transaction status & errors
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
