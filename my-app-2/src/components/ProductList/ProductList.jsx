import React, { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { Button } from 'antd';
import styles from './ProductList.module.css';

const ProductList = ({ products, onSelect, selectedCount }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (id, isChecked) => {
    const updatedSelectedProducts = isChecked
      ? [...selectedProducts, id]
      : selectedProducts.filter(productId => productId !== id);

    setSelectedProducts(updatedSelectedProducts);
    onSelect(updatedSelectedProducts.length);
  };

  const selectAllProducts = () => {
    const allProductIds = products.map(product => product.id);
    setSelectedProducts(allProductIds);
    onSelect(allProductIds.length);
  };

  return (
    <div className={styles.productList}>
      <h3>Список товарів:</h3>
      
      <Button onClick={selectAllProducts} type="primary" className={styles.selectAllButton}>
        Обрати всі
      </Button>

      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          isSelected={selectedProducts.includes(product.id)}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}

      {selectedProducts.length > 0 && (
        <div className={styles.selectedCount}>
          Обрано товарів: {selectedProducts.length}
        </div>
      )}
    </div>
  );
};

export default ProductList;
