<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

A nestJs application built for the management and handling of JSON files. 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Running the both of the queries

This project has been made with GraphQL so both of the endpoints can be accessed via the endpoint of http://localhost:3000/graphql.

# Graph QL Queries

In order to pass a given json file. One must run the following query as an example:

## Normal Parser

```bash
# Base Query
 query JsonTransformer($recordInput:[RecordInput!]!) {
 JsonParse(recordInput: $recordInput) {
  spam
  virus
  dns
  mes
  retrasado
  emisor
  receptor
}
}
# Query Param Example
{
  "recordInput": [
    {
      "eventVersion": "1.0",
      "ses": {
        "receipt": {
          "timestamp": "2015-09-11T20:32:33.936Z",
          "processingTimeMillis": 222,
          "recipients": [
            "recipient@example.com"
          ],
          "spamVerdict": {
            "status": "PASS"
          },
          "virusVerdict": {
            "status": "PASS"
          },
          "spfVerdict": {
            "status": "PASS"
          },
          "dkimVerdict": {
            "status": "PASS"
          },
          "dmarcVerdict": {
            "status": "PASS"
          },
          "dmarcPolicy": "reject",
          "action": {
            "type": "SNS",
            "topicArn": "arn:aws:sns:us-east-1:012345678912:example-topic"
          }
        },
        "mail": {
          "timestamp": "2015-09-11T20:32:33.936Z",
          "source": "61967230-7A45-4A9D-BEC9-87CBCF2211C9@example.com",
          "messageId": "d6iitobk75ur44p8kdnnp7g2n800",
          "destination": [
            "recipient@example.com"
          ],
          "headersTruncated": false,
          "headers": [
            {
              "name": "Return-Path",
              "value": "<0000014fbe1c09cf-7cb9f704-7531-4e53-89a1-5fa9744f5eb6-000000@amazonses.com>"
            },
            {
              "name": "Received",
              "value": "from a9-183.smtp-out.amazonses.com (a9-183.smtp-out.amazonses.com [54.240.9.183]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id d6iitobk75ur44p8kdnnp7g2n800 for recipient@example.com; Fri, 11 Sep 2015 20:32:33 +0000 (UTC)"
            },
            {
              "name": "DKIM-Signature",
              "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=ug7nbtf4gccmlpwj322ax3p6ow6yfsug; d=amazonses.com; t=1442003552; h=From:To:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding:Date:Message-ID:Feedback-ID; bh=DWr3IOmYWoXCA9ARqGC/UaODfghffiwFNRIb2Mckyt4=; b=p4ukUDSFqhqiub+zPR0DW1kp7oJZakrzupr6LBe6sUuvqpBkig56UzUwc29rFbJF hlX3Ov7DeYVNoN38stqwsF8ivcajXpQsXRC1cW9z8x875J041rClAjV7EGbLmudVpPX 4hHst1XPyX5wmgdHIhmUuh8oZKpVqGi6bHGzzf7g="
            },
            {
              "name": "From",
              "value": "sender@example.com"
            },
            {
              "name": "To",
              "value": "recipient@example.com"
            },
            {
              "name": "Subject",
              "value": "Example subject"
            },
            {
              "name": "MIME-Version",
              "value": "1.0"
            },
            {
              "name": "Content-Type",
              "value": "text/plain; charset=UTF-8"
            },
            {
              "name": "Content-Transfer-Encoding",
              "value": "7bit"
            },
            {
              "name": "Date",
              "value": "Fri, 11 Sep 2015 20:32:32 +0000"
            },
            {
              "name": "Message-ID",
              "value": "<61967230-7A45-4A9D-BEC9-87CBCF2211C9@example.com>"
            },
            {
              "name": "X-SES-Outgoing",
              "value": "2015.09.11-54.240.9.183"
            },
            {
              "name": "Feedback-ID",
              "value": "1.us-east-1.Krv2FKpFdWV+KUYw3Qd6wcpPJ4Sv/pOPpEPSHn2u2o4=:AmazonSES"
            }
          ],
          "commonHeaders": {
            "returnPath": "0000014fbe1c09cf-7cb9f704-7531-4e53-89a1-5fa9744f5eb6-000000@amazonses.com",
            "from": [
              "sender@example.com"
            ],
            "date": "Fri, 11 Sep 2015 20:32:32 +0000",
            "to": [
              "recipient@example.com"
            ],
            "messageId": "<61967230-7A45-4A9D-BEC9-87CBCF2211C9@example.com>",
            "subject": "Example subject"
          }
        }
      },
      "eventSource": "aws:ses"
    }
  ]
}
```

##  Mail Parser

```bash
#Query
query{
  MailJsonParse(Url: "src/mail/CodeChallenge.eml")
}
# 4 default emails are provided to test the mail parser.
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
