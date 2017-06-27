meteor:
    cmd.run:
        - name: >-
            curl https://install.meteor.com/ | sh
        - unless: meteor --version --allow-superuser

