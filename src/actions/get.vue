<script>
import db from "../components/firebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      items: [],
      criterions: []
    };
  },
  methods: {
    getData(document, arr) {
      db.collection(document)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              title: doc.data().title,
              c1: doc.data().c1,
              c2: doc.data().c2,
              c3: doc.data().c3,
              c4: doc.data().c4,
              c5: doc.data().c5,
              c6: doc.data().c6,
              c7: doc.data().c7,
              c8: doc.data().c8,
              c9: doc.data().c9
            };
            arr.push(data);
          });
        });
    },
    getCr(document, arr) {
      db.collection(document)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              name: doc.data().name,
              weight: doc.data().weight,
              type: doc.data().type
            };
            arr.push(data);
          });
        });
    }
  }
};
</script>
