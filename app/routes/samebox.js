// import React, { useState, useEffect } from "react";
// import {
//   Page,
//   Checkbox,
//   BlockStack,
//   InlineStack,
//   Button,
//   Select,
//   Divider,
//   Layout,
//   Spinner,
//   ChoiceList,
//   Card
// } from "@shopify/polaris";

// import './_index/styles.module.css';


// export default function Index() {
  
//   const [showCategoryImages, setShowCategoryImages] = useState(false);
//   const [hideProductsUntilSelected, setHideProductsUntilSelected] = useState(false);
//   const [showBrandInProductCards, setShowBrandInProductCards] = useState(false);
//   const [showReviewsInProductCards, setShowReviewsInProductCards] = useState(false);
//   const [showButtonsInProductCards, setShowButtonsInProductCards] = useState(false);
//   const [productsPerRow, setProductsPerRow] = useState("3");
//   const [productCardImageAspectRatio, setProductCardImageAspectRatio] = useState("default");
//   const [headerVehicleIcon, setHeaderVehicleIcon] = useState("garage");

//   const [isSaving, setIsSaving] = useState(false);

//   const handleChangeShowCategoryImages = () => setShowCategoryImages(!showCategoryImages);
//   const handleChangeHideProductsUntilSelected = () => setHideProductsUntilSelected(!hideProductsUntilSelected);
//   const handleChangeShowBrandInProductCards = () => setShowBrandInProductCards(!showBrandInProductCards);
//   const handleChangeShowReviewsInProductCards = () => setShowReviewsInProductCards(!showReviewsInProductCards);
//   const handleChangeShowButtonsInProductCards = () => setShowButtonsInProductCards(!showButtonsInProductCards);
//   const handleChangeInProductsPerRow = (value) => {setProductsPerRow(value)};
//   const handleChangeInProductCardImageAspectRatio = (value) => {setProductCardImageAspectRatio(value)};
//   const handleChangeInHeaderVehicleIcon = (value) => {setHeaderVehicleIcon(value)};
 
//   useEffect(() => {

//       const blockStacks = document.querySelectorAll('.Polaris-BlockStack--listReset');
//         blockStacks.forEach(blockStack => {
//           blockStack.style.flexDirection = 'row';
//           blockStack.style.marginTop = '-3px';
//           blockStack.querySelectorAll('li').forEach((li,index)=>{
//             if(index > 0)  {
//               li.style.marginLeft = '20px';
//             }
//           })
//       });

//       document.querySelectorAll('.choicelist-horizontal fieldset').forEach(fieldSet => {
//         fieldSet.style.marginTop = '5px'
//       })

//      fetch('https://auto.searchalytics.com/suspension-bros/dashboard/send_settings.php?requestedFile=settings.json')
//      .then(response => response.json())
//      .then(data => {
//         setShowCategoryImages(data?.showCategoryImages || showCategoryImages)
//         setHideProductsUntilSelected(data?.hideProductsUntilSelected || hideProductsUntilSelected)
//         setShowBrandInProductCards(data?.showBrandInProductCards || showBrandInProductCards )
//         setShowReviewsInProductCards(data?.showReviewsInProductCards || showReviewsInProductCards)
//         setShowButtonsInProductCards(data?.showButtonsInProductCards || showButtonsInProductCards)
//         setProductsPerRow(data?.productsPerRow || productsPerRow)
//         setProductCardImageAspectRatio(data?.productCardImageAspectRatio || productCardImageAspectRatio )
//         setHeaderVehicleIcon(data?.headerVehicleIcon || headerVehicleIcon)
//      });

//   }, []);

//   const sendDataToBackend = async () => {

//     setIsSaving(true);

//     const data = {

//       "showCategoryImages" : showCategoryImages,
//       "hideProductsUntilSelected": hideProductsUntilSelected,
//       "showBrandInProductCards": showBrandInProductCards,
//       "showReviewsInProductCards": showReviewsInProductCards,
//       "showButtonsInProductCards": showButtonsInProductCards,
//       "productsPerRow": productsPerRow,
//       "productCardImageAspectRatio": productCardImageAspectRatio,
//       "headerVehicleIcon": headerVehicleIcon

//     }

//     fetch('https://auto.searchalytics.com/suspension-bros/dashboard/save_settings.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         setIsSaving(false)
//       })


// }

//   return (
//     <Page 
//       title="Auto Search Settings"
//       secondaryActions={[
//         {
//           content: 'Sync Google Sheet',
//           accessibilityLabel: 'Sync Google Sheet',
//           onAction: () => {
//             // Define the URL to redirect to
//             const url = 'https://auto.searchalytics.com/suspension-bros/fitment-sync/';
//             // Open the URL in a new tab
//             window.open(url, '_blank');
//           },
//         },
//         {
//           content: 'Sync Product Catalog',
//           onAction: () => {
//             // Define the URL to redirect to
//             const url = 'https://auto.searchalytics.com/suspension-bros/setup/fetch-and-save/categories.php';
//             // Open the URL in a new tab
//             window.open(url, '_blank');
//           },
//         },
//       ]}
//     >
      
//       <Layout>
        
//         <Layout.Section>
          
//           <Card>

//             <BlockStack  gap="200">
//               <div className="Polaris-BlockStack" style={{ }}>

              
//                   <div className="Polaris-BlockStack" style={{ 'width': "50%", '--pc-block-stack-order':'column' , '--pc-block-stack-gap-xs': 'var(--p-space-200)' }} >

//                     <h2 class="Polaris-Text--root Polaris-Text--headingMd" style={{ 'fontSize': '16px', 'marginBottom': '2px' }}>Online store dashboard</h2>
//                     <Checkbox
//                       label="Hide Products Until Vehicle Selected"
//                       checked={hideProductsUntilSelected}
//                       onChange={handleChangeHideProductsUntilSelected}
//                     />
                  
//                     <Checkbox
//                       label="Show Category Images"
//                       checked={showCategoryImages}
//                       onChange={handleChangeShowCategoryImages}
//                     />

//                     <Checkbox
//                       label="Show Buttons in Product Cards"
//                       checked={showButtonsInProductCards}
//                       onChange={handleChangeShowButtonsInProductCards}
//                     />

//                     <Checkbox
//                       label="Show Brand in Product Cards"
//                       checked={showBrandInProductCards}
//                       onChange={handleChangeShowBrandInProductCards}
//                     />


//                     <Checkbox
//                       label="Show Reviews in Product Cards"
//                       checked={showReviewsInProductCards}
//                       onChange={handleChangeShowReviewsInProductCards}
//                     />
//                   </div>
//                   <div className="Polaris-BlockStack"  style={{ 'paddingLeft': '50px', 'borderLeft': '1px #eee solid',  'width': "50%", '--pc-block-stack-order':'column' , '--pc-block-stack-gap-xs': 'var(--p-space-200)' }}>
//                   <h2 class="Polaris-Text--root Polaris-Text--headingMd"  style={{ 'fontSize': '16px', 'marginBottom': '2px' }}>Online store dashboard</h2>
//                     <div class="choicelist-horizontal">
//                       <ChoiceList
//                         title="Number of Products in a row"
//                         choices={[
//                           {label: '3', value: '3'},
//                           {label: '4', value: '4'},
//                         ]}
//                         selected={productsPerRow}
//                         onChange={handleChangeInProductsPerRow}
//                       />
//                     </div>


//                     <div class="choicelist-horizontal">
//                       <ChoiceList
//                         title="Product Card Image Aspect Ratio"
//                         choices={[
//                           { label: 'Default', value: 'default'},
//                           { label: "4:3", value: "4:3" },
//                           { label: "1:1", value: "1:1" }
//                         ]}
//                         selected={productCardImageAspectRatio}
//                         onChange={handleChangeInProductCardImageAspectRatio}
//                       />
//                     </div>

//                     <div class="choicelist-horizontal">
//                       <ChoiceList
//                         title="Header Vehicle Icon"
//                         choices={[
//                           { label: 'Garage', value: 'garage'},
//                           { label: "Car", value: "car" },
//                           { label: "Truck", value: "truck" },
//                           { label: "Jeep", value: "jeep" }
//                         ]}
//                         selected={headerVehicleIcon}
//                         onChange={handleChangeInHeaderVehicleIcon}
//                       />
//                     </div>
//                   </div>
//                 </div>
//             </BlockStack>
            
//             <div style={{marginTop: '15px'}}></div>


//             <InlineStack align="right">


//                 <Button  className="customButton" disabled={isSaving}  onClick={sendDataToBackend} 
//                    variant="primary" accessibilityLabel="Save">
//                   {
//                     isSaving
//                       ?  <Spinner size="small" />
//                       : 'Save'
//                   }
//                 </Button>
//             </InlineStack>

//           </Card>

//         </Layout.Section>
      
//       </Layout>
    
//     </Page>
  
//   );

// }