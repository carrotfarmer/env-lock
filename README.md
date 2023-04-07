oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g env-lock
$ env-lock COMMAND
running command...
$ env-lock (--version)
env-lock/0.0.2 darwin-arm64 node-v18.14.2
$ env-lock --help [COMMAND]
USAGE
  $ env-lock COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`env-lock backup [PATH]`](#env-lock-backup-path)
* [`env-lock dbpath`](#env-lock-dbpath)
* [`env-lock delete [NAME]`](#env-lock-delete-name)
* [`env-lock deletedb`](#env-lock-deletedb)
* [`env-lock help [COMMANDS]`](#env-lock-help-commands)
* [`env-lock init`](#env-lock-init)
* [`env-lock list`](#env-lock-list)
* [`env-lock plugins`](#env-lock-plugins)
* [`env-lock plugins:install PLUGIN...`](#env-lock-pluginsinstall-plugin)
* [`env-lock plugins:inspect PLUGIN...`](#env-lock-pluginsinspect-plugin)
* [`env-lock plugins:install PLUGIN...`](#env-lock-pluginsinstall-plugin-1)
* [`env-lock plugins:link PLUGIN`](#env-lock-pluginslink-plugin)
* [`env-lock plugins:uninstall PLUGIN...`](#env-lock-pluginsuninstall-plugin)
* [`env-lock plugins:uninstall PLUGIN...`](#env-lock-pluginsuninstall-plugin-1)
* [`env-lock plugins:uninstall PLUGIN...`](#env-lock-pluginsuninstall-plugin-2)
* [`env-lock plugins update`](#env-lock-plugins-update)
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

_See code: [dist/commands/backup/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/backup/index.ts)_

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

_See code: [dist/commands/dbpath/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/dbpath/index.ts)_

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

_See code: [dist/commands/delete/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/delete/index.ts)_

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

_See code: [dist/commands/deletedb/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/deletedb/index.ts)_

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

_See code: [dist/commands/init/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/init/index.ts)_

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

_See code: [dist/commands/list/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/list/index.ts)_

## `env-lock plugins`

List installed plugins.

```
USAGE
  $ env-lock plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ env-lock plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.3/src/commands/plugins/index.ts)_

## `env-lock plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ env-lock plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ env-lock plugins add

EXAMPLES
  $ env-lock plugins:install myplugin 

  $ env-lock plugins:install https://github.com/someuser/someplugin

  $ env-lock plugins:install someuser/someplugin
```

## `env-lock plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ env-lock plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ env-lock plugins:inspect myplugin
```

## `env-lock plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ env-lock plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ env-lock plugins add

EXAMPLES
  $ env-lock plugins:install myplugin 

  $ env-lock plugins:install https://github.com/someuser/someplugin

  $ env-lock plugins:install someuser/someplugin
```

## `env-lock plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ env-lock plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ env-lock plugins:link myplugin
```

## `env-lock plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ env-lock plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ env-lock plugins unlink
  $ env-lock plugins remove
```

## `env-lock plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ env-lock plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ env-lock plugins unlink
  $ env-lock plugins remove
```

## `env-lock plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ env-lock plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ env-lock plugins unlink
  $ env-lock plugins remove
```

## `env-lock plugins update`

Update installed plugins.

```
USAGE
  $ env-lock plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

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

_See code: [dist/commands/replace/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/replace/index.ts)_

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

_See code: [dist/commands/restore/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/restore/index.ts)_

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

_See code: [dist/commands/save/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/save/index.ts)_

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

_See code: [dist/commands/secretkey/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/secretkey/index.ts)_

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

_See code: [dist/commands/view/index.ts](https://github.com/carrotfarmer/env-lock/blob/v0.0.2/dist/commands/view/index.ts)_
<!-- commandsstop -->
