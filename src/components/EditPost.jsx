export default function EditPost() {
  return (
    <div>
      <h2>Edit post</h2>

      <form>
        <p>
          <input type="text" placeholder="Post title" />
        </p>

        <p>
          <input type="text" placeholder="Post body" />
        </p>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
