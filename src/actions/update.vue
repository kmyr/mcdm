<script>
import db from "../components/firebaseInit";
export default {
  methods: {
    updateData(task, data) {
      db.collection(data)
        .where("title", "==", task)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                title: this.editingItem.title,
                rate: this.editingItem.rate,
                time: this.editingItem.time,
                price: this.editingItem.price
              })
              .then(() => {
                location.reload();
              });
          });
        });
    }
  }
};
</script>