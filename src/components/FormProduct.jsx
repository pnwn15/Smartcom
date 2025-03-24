import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FormProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [imagedetail, setImagedetail] = useState(null);
    const navigate = useNavigate(); // hook สำหรับใช้ navigate

    const handleCancel = () => {
        // เมื่อกดปุ่มยกเลิก จะนำไปหน้า /shop
        navigate('/shop');
    };
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleImagedetailChange = (e) => {
        setImagedetail(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('color', color);
        formData.append('category', category);
        formData.append('image', image);
        formData.append('imagedetail', imagedetail);

        try {
            const response = await axios.post('http://localhost:3000/cart/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                alert('สินค้าถูกเพิ่มในตะกร้าเรียบร้อย!');
                navigate('/shop')
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('เกิดข้อผิดพลาดในการเพิ่มสินค้า');
        }
    };
  return (
    <div>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <div className='flex justify-center gap-3 flex-col items-center'>
                  <img className='w-30' src="/smartcom.png" alt="" />
                  <h1 className="text-xl items-center  font-semibold border-b-2 border-red-600 text-center mb-6">เพิ่มสินค้า</h1>
              </div>
              <div>
              <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-3'>
                  <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                          ชื่อสินค้า
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                      />
                  </div>

                  <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700" htmlFor="price">
                          ราคา
                      </label>
                      <input
                          type="number"
                          id="price"
                          name="price"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          required
                      />
                  </div>

                  <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700" htmlFor="color">
                          สี
                      </label>
                      <input
                          type="text"
                          id="color"
                          name="color"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          required
                      />
                  </div>

                      <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700" htmlFor="category">
                              หมวดหมู่
                          </label>
                          <select
                              id="category"
                              name="category"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                              required
                          >
                              <option value="" disabled>เลือกหมวดหมู่</option>
                              <option value="Fidus">Fidus</option>
                              <option value="Lilin">Lilin</option>
                              <option value="lonetworks">lonetworks</option>
                              <option value="GateKeeper">GateKeeper</option>
                              <option value="Blauberg">Blauberg</option>
                              <option value="Shany">Shany</option>
                              <option value="Honeywell">Honeywell</option>
                              <option value="Cambium Networks">Cambium Networks</option>
                              {/* คุณสามารถเพิ่มตัวเลือกอื่น ๆ ได้ที่นี่ */}
                          </select>
                      </div>


                  <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700" htmlFor="image">
                          ภาพสินค้า
                      </label>
                      <input
                          type="file"
                          id="image"
                          name="image"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          onChange={handleImageChange}
                          required
                      />
                  </div>

                  <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700" htmlFor="imagedetail">
                          ภาพรายละเอียด
                      </label>
                      <input
                          type="file"
                          id="imagedetail"
                          name="imagedetail"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          onChange={handleImagedetailChange}
                          required
                      />
                  </div>

                      <button
                          onClick={handleCancel} 
                          type="submit"
                          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-black"
                      >
                          ยกเลิกสินค้า
                      </button>
                      <button
                    
                      type="submit"
                      className="w-full bg-green-400 text-white py-2 px-4 rounded-md hover:bg-black"
                  >
                      เพิ่มสินค้า
                  </button>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default FormProduct
