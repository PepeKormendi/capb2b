# syntax=docker/dockerfile:1

ARG VARIANT="20"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
ARG CAPVER="latest"

# Install some generally useful tools
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    curl git sqlite3 entr source-highlight \
    && curl -Lo /usr/local/bin/yq https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 \
    && chmod +x /usr/local/bin/yq \
    && apt-get -y install bat \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install SAP CAP SDK globally
USER node
RUN npm install -g @sap/cds-dk@$CAPVER

# vi mode everywhere and nicer prompt KTHXBAI
RUN cat <<EOBASHRC >> /home/node/.bashrc
export EDITOR=vi
set -o vi
bind -x '"\C-l": clear'
EOBASHRC

RUN echo 'export PS1=${PS1/\$ /\\\\n$ }' >> /home/node/.bashrc

# Ready!
WORKDIR /home/node
