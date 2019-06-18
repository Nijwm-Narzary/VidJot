
//Trial Code to connect both remote and local database simultaneously

if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI:
   'mongodb://nijwm:nijwm123@ds147011.mlab.com:47011/vidjot_narza'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}