env-lock
=================

[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/env-lock)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/env-lock)

A CLI to manage your .env files

* [Usage](#usage)
* [Commands](#commands)

# Usage
```sh-session
$ env-lock save .env.local myApp 
The env for myApp has been successfully added to the database!

$ env-lock view myApp 
CLIENT_ID=1234567890
CLIENT_SECRET=abcdefg

$ env-lock view myApp --hide
CLIENT_ID=**********
CLIENT_SECRET=*******

$ env-lock list 
myApp

$ env-lock replace myApp .env.development
Replacing..
Successfully deleted myApp
The env for myApp has been successfully added to the database!
Succcessfully replaced myApp!

$ env-lock dbpath
/opt/homebrew/lib/node_modules/env-lock/dist/utils/envStore.sqlite

$ env-lock backup ~/Documents/env
Backed up database store to /Users/xxxxx/Documents/env/envStore.sqlite

$ env-lock restore ~/Documents/env
Backed up database store to /opt/homebrew/lib/node_modules/env-lock/dist/utils/envStore.sqlite
```
# Commands
* [`env-lock backup [PATH]`](#env-lock-backup-path)
* [`env-lock dbpath`](#env-lock-dbpath)
* [`env-lock delete [NAME]`](#env-lock-delete-name)
* [`env-lock deletedb`](#env-lock-deletedb)
* [`env-lock help [COMMANDS]`](#env-lock-help-commands)
* [`env-lock init`](#env-lock-init)
* [`env-lock list`](#env-lock-list)
* [`env-lock replace [NAME] [FILE]`](#env-lock-replace-name-file)
* [`env-lock restore [BACKUPPATH]`](#env-lock-restore-backuppath)
* [`env-lock save [FILE] [NAME]`](#env-lock-save-file-name)
* [`env-lock secretkey`](#env-lock-secretkey)
* [`env-lock view [NAME]`](#env-lock-view-name)

## `env-lock backup [PATH]`

Backup the database store

```
USAGE
  $ env-lock backup [PATH]

ARGUMENTS
  PATH  backup path

DESCRIPTION
  Backup the database store

EXAMPLES
  $ env-lock backup
```

_See code: [dist/commands/backup/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.3/dist/commands/backup/index.ts)_

## `env-lock dbpath`

Create a database store

```
USAGE
  $ env-lock dbpath

DESCRIPTION
  Create a database store

EXAMPLES
  $ env-lock dbpath
```

_See code: [dist/commands/dbpath/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.3/dist/commands/dbpath/index.ts)_

## `env-lock delete [NAME]`

Delete an env from the store

```
USAGE
  $ env-lock delete [NAME]

ARGUMENTS
  NAME  env to delete

DESCRIPTION
  Delete an env from the store

EXAMPLES
  $ env-lock delete
```

_See code: [dist/commands/delete/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.3/dist/commands/delete/index.ts)_

## `env-lock deletedb`

Delete the database store

```
USAGE
  $ env-lock deletedb

DESCRIPTION
  Delete the database store

EXAMPLES
  $ env-lock deletedb
```

_See code: [dist/commands/deletedb/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.3/dist/commands/deletedb/index.ts)_

## `env-lock help [COMMANDS]`

Display help for env-lock.

```
USAGE
  $ env-lock help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for env-lock.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.8/src/commands/help.ts)_

## `env-lock init`

Create a database store

```
USAGE
  $ env-lock init

DESCRIPTION
  Create a database store

EXAMPLES
  $ env-lock init
```

_See code: [dist/commands/init/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.3/dist/commands/init/index.ts)_

## `env-lock list`

List all the saved envs

```
USAGE
  $ env-lock list

DESCRIPTION
  List all the saved envs

EXAMPLES
  $ env-lock list
```

_See code: [dist/commands/list/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.3/dist/commands/list/index.ts)_

## `env-lock replace [NAME] [FILE]`
replaces an existing env entry with a new env file

```
USAGE
  $ env-lock replace [NAME] [FILE]

ARGUMENTS
  NAME  name of the project
  FILE  file to read

DESCRIPTION
  replaces an existing env entry with a new env file

EXAMPLES
  $ env-lock replace
```

_See code: [dist/commands/replace/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.3/dist/commands/replace/index.ts)_

## `env-lock restore [BACKUPPATH]`

Use a backup as the new database store

```
USAGE
  $ env-lock restore [BACKUPPATH]

ARGUMENTS
  BACKUPPATH  backup path

DESCRIPTION
  Use a backup as the new database store

EXAMPLES
  $ env-lock restore
```

_See code: [dist/commands/restore/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.3/dist/commands/restore/index.ts)_

## `env-lock save [FILE] [NAME]`

Save an env file

```
USAGE
  $ env-lock save [FILE] [NAME]

ARGUMENTS
  FILE  file to read
  NAME  name of the project

DESCRIPTION
  Save an env file

EXAMPLES
  $ env-lock save
```

_See code: [dist/commands/save/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.3/dist/commands/save/index.ts)_

## `env-lock secretkey`

view the encryption key for the stored envs

```
USAGE
  $ env-lock secretkey

DESCRIPTION
  view the encryption key for the stored envs

EXAMPLES
  $ env-lock secretkey
```

_See code: [dist/commands/secretkey/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.3/dist/commands/secretkey/index.ts)_

## `env-lock view [NAME]`

retrieve the values of a saved env entry

```
USAGE
  $ env-lock view [NAME] [-h]

ARGUMENTS
  NAME  Name of env to be retreived.

FLAGS
  -h, --hide

DESCRIPTION
  retrieve the values of a saved env entry

EXAMPLES
  $ env-lock view
```
