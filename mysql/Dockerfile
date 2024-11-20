FROM mysql:8.0
COPY conf/my.cnf /etc/mysql/my.cnf
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s \
    CMD mysqladmin ping -h localhost || exit 1
EXPOSE 5655
