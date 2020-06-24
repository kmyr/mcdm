<script>
import db from "../components/firebaseInit";
export default {
  methods: {
    updateData(title, data, obj, target) {
      db.collection(data)
        .where(target, "==", title)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update(obj).then(() => {
              location.reload();
            });
          });
        });
    },
  },
};
</script>
