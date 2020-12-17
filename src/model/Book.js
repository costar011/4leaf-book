import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Book = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Book`, Book, `Book`);
// export default를 하여 외부에서도 사용 가능하게 만들어준다.
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
