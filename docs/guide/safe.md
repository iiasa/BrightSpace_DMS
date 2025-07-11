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

## Water use                          

## Nutrient flows                     
                                   
## Chemical pollution (novel entities)
                                   
## Aerosol loading                    

## Climate                            

[https://doi.org/10.5281/zenodo.10609590]:https://doi.org/10.5281/zenodo.10609590
[DOI:10.1007/s41064-023-00247-x]:DOI:10.1007/s41064-023-00247-x
[Agricultural land use]:https://atlas.thuenen.de/catalogue/#/dataset/205
[Mowing events map]:https://atlas.thuenen.de/catalogue/#/dataset/215
[https://doi.org/10.5281/zenodo.10617622]:https://doi.org/10.5281/zenodo.10617622
[https://doi.org/10.1016/j.rse.2021.112795]:https://doi.org/10.1016/j.rse.2021.112795
[DOI:10.1016/j.rse.2021.112831]:https://doi.org/10.1016/j.rse.2021.112831
