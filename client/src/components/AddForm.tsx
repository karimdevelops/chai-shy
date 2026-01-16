import useMenuCat from "../hooks/useMenuCat";
import "../styles/Form.css";

export default function AddForm() {
  const menuCat = useMenuCat();
  return (
    <form
      action="/api/admin/add"
      method="POST"
      encType="multipart/form-data"
      className="add-form flex flex-column flex-center flex-gap-50"
    >
      <input type="text" name="name" placeholder="Product Name" />
      <input type="number" name="price" placeholder="Product Price" />
      <textarea name="desc" placeholder="Product Description" />
      <div className="flex flex-gap-20">
        <select name="menu_category">
          {menuCat.length != 0
            ? menuCat.map((cat) => {
                return <option value={cat["id"]}>{cat["name"]}</option>;
              })
            : null}
        </select>
        <label htmlFor="img-upload" className="img-upload-label">
          Upload Image
        </label>
      </div>
      <input
        type="file"
        name="img"
        id="img-upload"
        accept=".avif"
        placeholder="Upload Image"
      />
      <button className="button-submit">Add</button>
    </form>
  );
}
