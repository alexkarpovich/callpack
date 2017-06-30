{% set pillar_get = salt['pillar.get'] -%}
include:
{%- if pillar_get('node:install_from_source') %}
  - .source
{%- elif pillar_get('node:install_from_binary') %}
  - .binary
{%- else %}
  - .pkg
{%- endif %}
  - .config

node_recheck:
    cmd.run:
        - name: >-
            apt-get install -f

npm:
  pkg.installed:
    - require:
      - pkg: nodejs

npm-packages:
  npm.installed:
    - names:
      - express
      - webpack
      - concurrently
      - supervisor
    - require:
      - pkg: npm
