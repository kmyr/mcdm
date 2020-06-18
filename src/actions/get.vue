<script>
import db from "../components/firebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      items: []
    };
  },
  methods: {
    getData(document) {
      db.collection(document)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              title: doc.data().title,
              price: doc.data().price,
              rate: doc.data().rate,
              time: doc.data().time
            };
            this.items.push(data);
          });
        });
    }
  }
};
</script>