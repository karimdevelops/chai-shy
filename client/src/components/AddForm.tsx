import "../styles/Form.css";

export default function AddForm() {
  return (
    <form className="add-form flex flex-column flex-center flex-gap-50">
      <input type="text" name="name" placeholder="Product Name" />
      <input type="text" name="price" placeholder="Product Price" />
      <textarea name="description" placeholder="Product Description" />
      <label htmlFor="img-upload" className="img-upload-label">
        Upload Image
      </label>
      <input type="file" id="img-upload" placeholder="Upload Image" />
      <button className="button-submit">Add</button>
    </form>
  );
}
