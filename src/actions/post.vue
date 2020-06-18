<script>
import db from "../components/firebaseInit";

export default {
  methods: {
    postData(document, obj) {
      db.collection(document)
        .add(obj)
        .catch(error => console.log(error))
        .then(() => {
          location.reload();
        });
    }
  }
};
</script>