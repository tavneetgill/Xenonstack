#!/bin/bash

# internsctl script

case "$1" in
  "cpu")
    case "$2" in
      "getinfo")
        lscpu
        ;;
      *)
        echo "Invalid subcommand for cpu"
        ;;
    esac
    ;;
  "memory")
    case "$2" in
      "getinfo")
        free
        ;;
      *)
        echo "Invalid subcommand for memory"
        ;;
    esac
    ;;
  "user")
    case "$2" in
      "create")
        if [ -z "$3" ]; then
          echo "Usage: internsctl user create <username>"
        else
          sudo useradd -m "$3"
          echo "User $3 created successfully."
        fi
        ;;
      "list")
        if [ "$3" == "--sudo-only" ]; then
          getent passwd | cut -d: -f1,3,7 | awk -F: '$2 >= 1000 {print $1}' | xargs -I {} sudo -l -U {}
        else
          getent passwd | cut -d: -f1
        fi
        ;;
      *)
        echo "Invalid subcommand for user"
        ;;
    esac
    ;;
  "file")
    case "$2" in
      "create")
        if [ -z "$3" ]; then
          echo "Usage: internsctl file create <filename>"
        else
          touch "$3"
          echo "File $3 created successfully."
        fi
        ;;
      "getinfo")
        if [ -z "$3" ]; then
          echo "Usage: internsctl file getinfo [options] <file-name>"
        else
          filename="$3"
          size=$(wc -c < "$filename" 2>/dev/null)
          permissions=$(stat -c%a "$filename")
          owner=$(stat -c%U "$filename")
          last_modified=$(stat -c%y "$filename")

          if [ "$#" -gt 3 ]; then
             shift 3

           while [ "$#" -gt 0 ]; do
            case $1 in
              "--size" | "-s")
                echo "$size"
                ;;
              "--permissions" | "-p")
                echo "$permissions"
                ;;
              "--owner" | "-o")
                echo "$owner"
                ;;
              "--last-modified" | "-m")
                echo "$last_modified"
                ;;
              *)
                echo "Invalid option: $1"
                exit 1
                ;;
            esac
            shift
          done

          else
           echo "File: $filename"
           echo "Access: $permissions"
           echo "Size(B): $size"
           echo "Owner: $owner"
           echo "Modify: $last_modified"
          exit 0
        fi
       fi
        ;;
      *)
        echo "Invalid subcommand for file"
        ;;
    esac
    ;;
  "--help")
    echo "Usage: internsctl <command> <subcommand> [options] [arguments]"
    echo "Commands:"
    echo "  cpu getinfo            Get CPU information"
    echo "  memory getinfo         Get memory information"
    echo "  user create <username> Create a new user"
    echo "  user list [--sudo-only] List users or only those with sudo permissions"
    echo "  file getinfo <file-name> [options] Get information about a file"
    echo "    Options:"
    echo "      --size, -s          Print file size"
    echo "      --permissions, -p   Print file permissions"
    echo "      --owner, -o         Print file owner"
    echo "      --last-modified, -m Print last modified time"
    ;;
  "--version")
    echo "internsctl v0.1.0"
    ;;
  *)
    echo "Invalid command. Use 'internsctl --help' for usage information."
    ;;
esac
