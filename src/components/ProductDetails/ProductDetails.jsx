import { useState,useContext ,useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MyContext } from "../../App";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";
import { useNavigate } from 'react-router-dom';
const ProductDetails = ({ selectedProduct }) => {
  const { value } = useContext(MyContext);
  const [src, setSrc] = value;
  
  console.log(` from product details ${selectedProduct}`)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [displayModel, setDisplayModel] = useState(false);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handelAdd = (selectedProduct, quantity) => {
    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success("Product has been added to cart!");
  };

  useEffect(() => {
   
   if(selectedProduct.modelUrl==="")
 {
  setDisplayModel(false);
  console.log("url is empty")
  
 }
 else
 {
  setDisplayModel(true);
  setSrc(selectedProduct.modelUrl);
  console.log(src)
 }

  }, [selectedProduct]);


  return (
    <div className="product-page">
      <Container>
   {  displayModel && 
      <img 
      style={{
        position: "relative",
        width: "40px",
        left:"85%",
        
        marginTop:"10px"
      }}
      alt="3d model"
      src="https://i.imgur.com/eJPLY5y_d.webp?maxwidth=760&fidelity=grand"
      onClick={() => {
        setDisplayModel(true);
        navigate("/test")

      }}
    />
   }
 
        <Row className="justify-content-center">
       
          <Col md={6}>
         
            <img style={{marginTop:"15px"}} loading="lazy" src={selectedProduct?.imgUrl} alt="" />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.productName}</h2>
      
            <div className="info">
              <span className="price">${selectedProduct?.price}</span>
              
            </div>
            <div className="info">
            <span  className="price">category:{selectedProduct?.category}</span>
            </div>
           
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handelAdd(selectedProduct, quantity)}
              style={{marginTop:"20px"}}
            >
              Add To Cart
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
