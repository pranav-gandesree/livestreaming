#!/bin/bash

STREAM_KEY=$1
S3_BUCKET="livestream-bucket-${STREAM_KEY}"

# Upload HLS files to S3
aws s3 sync /hls/${STREAM_KEY}/ s3://${S3_BUCKET}/${STREAM_KEY}/ \
    --delete \
    --acl public-read