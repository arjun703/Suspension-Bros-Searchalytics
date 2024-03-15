import React, { useState, useEffect } from "react";
import {
  Page,
  Checkbox,
  BlockStack,
  InlineStack,
  Button,
  Select,
  Divider,
  Layout,
  Spinner,
  Card
} from "@shopify/polaris";

export default function Index() {
  
  const [showCategoryImages, setShowCategoryImages] = useState(false);
  const [hideProductsUntilSelected, setHideProductsUntilSelected] = useState(false);
  const [showBrandInProductCards, setShowBrandInProductCards] = useState(false);
  const [showReviewsInProductCards, setShowReviewsInProductCards] = useState(false);
  const [showButtonsInProductCards, setShowButtonsInProductCards] = useState(false);
  const [productsPerRow, setProductsPerRow] = useState("3");
  const [productCardImageAspectRatio, setProductCardImageAspectRatio] = useState("4:3");

  const [isSaving, setIsSaving] = useState(false);

  const handleChangeShowCategoryImages = () => setShowCategoryImages(!showCategoryImages);
  const handleChangeHideProductsUntilSelected = () => setHideProductsUntilSelected(!hideProductsUntilSelected);
  const handleChangeShowBrandInProductCards = () => setShowBrandInProductCards(!showBrandInProductCards);
  const handleChangeShowReviewsInProductCards = () => setShowReviewsInProductCards(!showReviewsInProductCards);
  const handleChangeShowButtonsInProductCards = () => setShowButtonsInProductCards(!showButtonsInProductCards);
  const handleChangeInProductsPerRow = (value) => {setProductsPerRow(value)};
  const handleChangeInProductCardImageAspectRatio = (value) => {setProductCardImageAspectRatio(value)};
 
  useEffect(() => {
      // Side effect code goes here

     fetch('https://auto.searchalytics.com/suspension-bros/dashboard/send_settings.php?requestedFile=settings.json')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setShowCategoryImages(data.showCategoryImages)
        setHideProductsUntilSelected(data.hideProductsUntilSelected)
        setShowBrandInProductCards(data.showBrandInProductCards)
        setShowReviewsInProductCards(data.showReviewsInProductCards)
        setShowButtonsInProductCards(data.showButtonsInProductCards)
        setProductsPerRow(data.productsPerRow)
        setProductCardImageAspectRatio(data.productCardImageAspectRatio)
     });
  }, []);

  const sendDataToBackend = async () => {

    setIsSaving(true);

    const data = {

      "showCategoryImages" : showCategoryImages,
      "hideProductsUntilSelected": hideProductsUntilSelected,
      "showBrandInProductCards": showBrandInProductCards,
      "showReviewsInProductCards": showReviewsInProductCards,
      "showButtonsInProductCards": showButtonsInProductCards,
      "productsPerRow": productsPerRow,
      "productCardImageAspectRatio": productCardImageAspectRatio

    }


    fetch('https://auto.searchalytics.com/suspension-bros/dashboard/save_settings.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setIsSaving(false)
      })


}

  return (
    <Page 
      title="Auto Search Settings"
      secondaryActions={[
        {
          content: 'Sync Google Sheet',
          accessibilityLabel: 'Sync Google Sheet',
          onAction: () => {
            // Define the URL to redirect to
            const url = 'https://auto.searchalytics.com/suspension-bros/fitment-sync/';
            // Open the URL in a new tab
            window.open(url, '_blank');
          },
        },
        {
          content: 'Sync Product Catalog',
          onAction: () => alert('Syncing Product Catalog'),
        },
      ]}

    >
      
      <Layout>
        
        <Layout.Section>
          
          <Card>

            <BlockStack  gap="200">
          
                <Checkbox
                  label="Hide Products Until Vehicle Selected"
                  checked={hideProductsUntilSelected}
                  onChange={handleChangeHideProductsUntilSelected}
                />
              
                <Checkbox
                  label="Show Category Images"
                  checked={showCategoryImages}
                  onChange={handleChangeShowCategoryImages}
                />

                <Checkbox
                  label="Show Buttons in Product Cards"
                  checked={showButtonsInProductCards}
                  onChange={handleChangeShowButtonsInProductCards}
                />

                <Checkbox
                  label="Show Brand in Product Cards"
                  checked={showBrandInProductCards}
                  onChange={handleChangeShowBrandInProductCards}
                />


                <Checkbox
                  label="Show Reviews in Product Cards"
                  checked={showReviewsInProductCards}
                  onChange={handleChangeShowReviewsInProductCards}
                />


                <Select
                  label="Number of Products in a Row"
                  options={[
                    { label: "3", value: "3" },
                    { label: "4", value: "4" }
                  ]}
                  value={productsPerRow}
                  onChange={handleChangeInProductsPerRow}
                />
              
                <Select
                  label="Product Card Image Aspect Ratio"
                  options={[
                    { label: "4:3", value: "4:3" },
                    { label: "1:1", value: "1:1" }
                  ]}
                  value={productCardImageAspectRatio}
                  onChange={handleChangeInProductCardImageAspectRatio}
                />


            </BlockStack>
            
            <div style={{marginTop: '15px'}}></div>


            <InlineStack align="center">


                <Button  className="customButton" disabled={isSaving}  onClick={sendDataToBackend} 
                   variant="primary" accessibilityLabel="Save">
                  {
                    isSaving
                      ?  <Spinner size="small" />
                      : 'Save'
                  }
                </Button>
            </InlineStack>

          </Card>

        </Layout.Section>
      
      </Layout>
    
    </Page>
  
  );

}