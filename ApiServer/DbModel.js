const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
  });
  
export default FormData = mongoose.model('FormData', formDataSchema);
  