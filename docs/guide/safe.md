# Safe Operating Space (SOS) thematic

## Biodiversity                       

### *Approach: Grass land intensity - mowing event detection*

##### *Description*

Spatially explicit knowledge on grassland extent and management is critical to understand and monitor the impact of grassland use intensity on ecosystem services and biodiversity. While regional studies allow detailed insights into land use and ecosystem service interactions, information on a national scale can aid biodiversity assessments. However, for most European countries this information is not yet widely available. We used an analysis-ready-data cube that contains dense time series of co-registered Sentinel-2 and Landsat 8 data, covering the extent of Germany. We propose an algorithm that detects mowing events in the time series based on residuals from an assumed undisturbed phenology, as an indicator of grassland use intensity. 

##### *Main data sources to produce the data*

Among others
* Sentinel-1, Sentinel-2, Landsat 8 and additional environmental data

##### *Article*

Schwieder, M., Wesemeyer, M., Frantz, D., Pfoch, K., Erasmi, S., Pickert, J., Nendel, C., & Hostert, P. (2022). Mapping grassland mowing events across Germany based on combined Sentinel-2 and Landsat 8 time series. Remote Sensing of Environment, 269, 112795, [https://doi.org/10.1016/j.rse.2021.112795]

##### *Temporal and spatial coverage*

Spatial coverage: Germany. 

Temporal coverage: 2017-2021.

##### *Resolution*

Field level parcel data of different size for grass land.

##### *Data*

Schwieder, M., Lobert, F., Tetteh, G. O., & Erasmi, S. (2024). Grassland mowing events across Germany detected from combined Sentinel-2 and Landsat time series for the years 2017 - 2021 [Data set]. Zenodo. [https://doi.org/10.5281/zenodo.10609590]

##### *Visualization*

[Mowing events map]

## Land use    

### *Approach: crop type detection*

##### *Description*

Based on the multi-year dataset major crop sequences of cereals and leaf crops are mapped. Most crop sequences were dominated by winter cereals followed by summer cereals. Monocultures of summer cereals were mainly revealed in the Northwest of Germany. It is showcased that high spatial and thematic detail in combination with annual mapping will stimulate research on crop cycles and studies to assess the impact of environmental policies on management decisions. The results demonstrate the capabilities of integrated optical time series and SAR data in combination with variables describing local and seasonal environmental conditions for annual large-area crop type mapping.

##### *Main data sources to produce the data*

Among others
* Sentinel-2 and Landsat 8 data
* Sentinel-1 data
* Topographic variables elevation, hillslope, and aspect from a digital elevation model (DEM) with a spatial resolution of 10 m provided by the German Federal Agency for Cartography and Geodesy 
* High-resolution (1 x 1 km) climatological data on seasonal mean air temperature and precipitation from German Weather Service
* Reference data: Integrated Administration and Control System (IACS)

##### *Article*

Blickensdoerfer, L., Schwieder, M., Pflugmacher, D., Nendel, C., Erasmi, S., Hostert, P. (2022). Mapping of crop types and crop sequences with combined time series of Sentinel-1, Sentinel-2 and Landsat 8 data for Germany. Remote Sens Environ 269:112831, [DOI:10.1016/j.rse.2021.112831]

##### *Temporal and spatial coverage*

Spatial coverage: Germany. 

Temporal coverage: 2017-2021.

##### *Resolution*

Field level parcel data of different size.

##### *Data*

[https://doi.org/10.5281/zenodo.10617622]

##### *Visualization*

[Agricultural land use]
                                   
### *Approach: parcel segmentation*

##### *Description*

Effective monitoring of agricultural lands requires accurate spatial information about the locations and boundaries of agricultural fields. Through satellite imagery, such information can be mapped on a large scale at a high temporal frequency. Various methods exist in the literature for segmenting agricultural fields from satellite images. Edge-based, region-based, or hybrid segmentation methods are traditional methods that have widely been used for segmenting agricultural fields. Lately, the use of deep neural networks (DNNs) for various tasks in remote sensing has been gaining traction. Therefore, to identify the optimal method for segmenting agricultural fields from satellite images, we evaluated three state-of-the-art DNNs, namely Mask R-CNN, U-Net, and FracTAL ResUNet against the multi-resolution segmentation (MRS) algorithm, which is a region-based and a more traditional segmentation method. DNNs, particularly FracTAL ResUNet, can be effectively used for large-scale segmentation of agricultural fields from satellite images.

This work is especially important for crop type detection.

##### *Main data sources to produce the data*

Among others
* Sentinel-2 
* ATKIS
* Reference data: agricultural parcels of the Geospatial Aid Application (GSAA)

##### *Article*

Tetteh GO, Schwieder M, Erasmi S, Conrad C, Gocht A (2023). Comparison of an optimised multiresolution segmentation approach with deep neural networks for delineating agricultural fields from Sentinel-2 images. J Photogramm Remote Sensing Geoinf Sci 91(4):295-312, [DOI:10.1007/s41064-023-00247-x].

##### *Spatial coverage*

Spatial coverage: Lower Saxony - Federal state of Germany. 

##### *Resolution*

Field level parcel data of different size.

### *Approach: crop sequence typology*

##### *Description*

Temporal crop diversity has numerous environmental benefits and is fostered by different agri-environmental policy measures. To monitor policy impacts and design effective measures, knowledge of the actual status of crop sequences is crucial. Here, we provide the results of applying a crop sequence typology developed by Stein & Steinmann (2018) to the German federal state of North Rhine-Westphalia. The typology categorizes every crop sequence according to its functional and structural diversity, allowing an aggregated evaluation of crop sequence diversity. This information can then be used in ex-post and ex-ante policy assessments. The typology requires matching plots over the years, which we did by using the approach of the largest overlap, conserving the actual plot structure. The approach and part of the input data have been published in a data article.

##### *Main data sources to produce the data*

Data from the Integrated Administration and Control System (IACS), covering the shape and location of plots as well as the grown crops.

##### *Article*

Pahmeyer, C., Kuhn, T., Storm, H., 2025. A crop sequence dataset of the German federal state of North Rhine-Westphalia from 2019 to 2024. Data in Brief 60, 111617. [https://doi.org/10.1016/j.dib.2025.111617]

Kuhn, T., Adenäuer, L.; Egenolf, K.; Gömann, H.; Pahmeyer, C.; Storm, H. 2025. Using a Crop Sequence Typology to Assess Agri-Environmental Policies for Crop Diversification, under review.

##### *Temporal and spatial coverage*

Spatial coverage: North Rhine-Westphalia - Federal state of Germany
Temporal coverage: 2015 to 2024 (2025 forthcoming)

##### *Resolution*

Field-level parcel data, which can be aggregated to different administrative units

##### *Data*

The complete data cannot be published due to confidentiality requirements. However, the methodology to match plots over the years and a six-year data set, which is not sufficient to derive the typology, is available at [https://zenodo.org/records/15011155]

Furthermore, typology results for 2019 to 2025 will be published in Data in Brief, as IACS data of North Rhine-Westphalia is publicly available from 2019 onwards. 

## Water use                          

## Nutrient flows                     
                                   
## Chemical pollution (novel entities)
                                   
## Aerosol loading                    

## Climate                            

[https://doi.org/10.1016/j.dib.2025.111617]:https://doi.org/10.1016/j.dib.2025.111617
[https://zenodo.org/records/15011155]:https://zenodo.org/records/15011155
[https://doi.org/10.5281/zenodo.10609590]:https://doi.org/10.5281/zenodo.10609590
[DOI:10.1007/s41064-023-00247-x]:https://doi.org/10.1007/s41064-023-00247-x
[Agricultural land use]:https://atlas.thuenen.de/catalogue/#/dataset/205
[Mowing events map]:https://atlas.thuenen.de/catalogue/#/dataset/215
[https://doi.org/10.5281/zenodo.10617622]:https://doi.org/10.5281/zenodo.10617622
[https://doi.org/10.1016/j.rse.2021.112795]:https://doi.org/10.1016/j.rse.2021.112795
[DOI:10.1016/j.rse.2021.112831]:https://doi.org/10.1016/j.rse.2021.112831
