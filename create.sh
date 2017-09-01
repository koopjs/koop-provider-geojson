#!/bin/bash
claudia create --name koop-provider-geojson --handler lambda.handler --deploy-proxy-api --region us-east-1 --set-env KOOP_PORT=80
