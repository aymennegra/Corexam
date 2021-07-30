/*
module.exports = mongoose => {
  var schema = mongoose.Schema(
     new mongoose.Schema({
    subject: String,
    date: String,
    questionNbr: Number,
    totalMark: Number,

    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      }
    ]
    
  }),
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Examen = mongoose.model("Examen", schema);
  return Examen;
};
*/