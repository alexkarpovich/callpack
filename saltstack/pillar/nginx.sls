nginx:
  gunicorn_bind: 127.0.0.1:8000
  dns_name: ratio.by 
  cert_key: /srv/keys/server.key
  cert_crt: /srv/keys/server.crt
