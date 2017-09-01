#!/bin/bash
claudia create --name walmart-georss --handler lambda.handler --deploy-proxy-api --region us-east-1 --set-env KOOP_PORT=80
