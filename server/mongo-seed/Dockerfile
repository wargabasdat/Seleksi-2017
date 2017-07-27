FROM mongo

COPY movie /mongo-seed/movie/
COPY mongo.sh /mongo-seed/mongo.sh
RUN chmod 777 /mongo-seed/mongo.sh

CMD /mongo-seed/mongo.sh