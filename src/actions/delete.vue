<script>
import db from "../components/firebaseInit";
export default {
  methods: {
    async deleteData(doc, i, target) {
      db.collection(doc)
        .where(target, "==", i)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });
    },
  },
};
</script>
