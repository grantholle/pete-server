	#!/bin/sh

curl --header "Content-Type: application/json" \
  --request POST \
  --data "{\"hash\":\"$TR_TORRENT_HASH\",\"title\":\"$TR_TORRENT_NAME\",\"id\":$TR_TORRENT_ID}" \
  http://localhost:3333/api/v1/finished