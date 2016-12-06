nginx:
  pkg:
    - installed
  service:
    - running
    - reload: True
    - require:
      - pkg: nginx

nginx_config:
  file.managed:
    - name: /etc/nginx/nginx.conf
    - source: salt://nginx/files/nginx.conf
    - makedirs: True
    - service: nginx

nginx_app_config:
  file.managed:
    - name: /etc/nginx/sites-available/{{ nginx.get('dns_name') }}
    - source: salt://nginx/files/nginx.app.conf
    - context:
      bind: {{ nginx.get('gunicorn_bind') }}
      dns_name: {{ nginx.get('dns_name') }}
    - template: jinja
    - makedirs: True
    - service: nginx

nginx_run:
  service.running:
    - name: nginx
    - enable: True
    - watch:
      - file: /etc/nginx/sites-available/{{ nginx.get('dns_name') }}
    - require:
      - file: /etc/nginx/sites-enabled/{{ nginx.get('dns_name') }}
      - pkg: nginx

/etc/nginx/sites-enabled/{{ nginx.get('dns_name') }}:
  file.symlink:
    - target: /etc/nginx/sites-available/{{ nginx.get('dns_name') }}
    - user: root
    - group: root
    - mode: 644
    - require:
      - file: /etc/nginx/sites-available/{{ nginx.get('dns_name') }}

/etc/nginx/sites-enabled/default:
  file.absent:
    - name: /etc/nginx/sites-enabled/default
    - require:
      - pkg: nginx
