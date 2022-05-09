git push heroku master || \
heroku git:remote -a truck-mobile && git push heroku master || \
heroku login && heroku git:remote -a truck-mobile && git push heroku master