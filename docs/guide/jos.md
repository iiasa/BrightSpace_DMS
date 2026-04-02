# Just Operating Space (JOS) thematic

## Farm resilience

### Farm income

#### *Approach: FADN spatial - Downscaling*

##### *Description*
FADN subsidies are part of farm income. As these data is only accessible at farm level, a down scaling approach has been developed and applied.

Data is protected (more than 15 obs. per observation unit).

##### *Main data sources to produce the data*

* Individual FADN data
* Farm Structure Spatial Units (FSU) established in the VERIFY project ([https://verify.lsce.ipsl.fr/])
* CAPDIS for information on land use and yields (Britz, W., Witzke, P.  (2014). CAPRI model documentation 2014)
    * Information on land use in the FSU is calculated calculated through the Land Area Prediction model (LAPM), based on the methods of Lamboni et al. (2016: Lamboni, M. R. Koeble, A. Leip (2016).
    * Multi-scale land-use disaggregation modelling: concept and application to EU countries. Environmental Modelling & Software 82, 183-217. [https://doi.org/10.1016/j.envsoft.2016.04.028]), and assessing its accuracy (Leip et al., 2017: Leip, A., Koeble, R., Rotllan-Puig, X., 2017. Land Area Prediction model (LAPM) Accuracy Assessment. European Commission, Ispra (VA), Italy. [https://doi.org/10.2760/624482]). 
    * They include available data of crop areas from the Farm Structure Survey 2010 at a 10 km x 10 km grid, developing a methodology to gap-fill missing data which was filtered out by confidentiality rules (Bujnowska et al., 2019: Bujnowska, A., Gomez-Prieto, O., Kloek, W., Koeble, R., Leip, D., Martinez-Solano, D., Ramos, H. (2019). Disseminating European data at farm level while protecting confidentiality: scientific use files and homogeneous spatial units, in: International Conference on Agricultural Statistics, New Delhi.).

##### *Reports*

* Estimation approaches to downscale policy information from FADN (Chapter 5 in [D3.1 Report on stocktake of requirements and technical specifications for the LUM policy database] - [LAMASUS project]) 

##### *Article*

Article is prepared for submission.

##### *Temporal and spatial coverage*

Spatial coverage: EU-wide for all countries contributing to the EU-FADN. 

Temporal coverage: depending on progress. Actually 2001-2020 each second year.

##### *Resolution*

Farm Structure Spatial Units (FSU). High resolution of grids of different size.

##### *Visualization*

[FADN SPATIAL]

### Farm viability

TBD


## Nutrition security 

### Food waste - Food loss and waste

##### *Description*

Panel dataset of modeled estimates of annual food loss and waste (FLW) along the supply chain (primary production, processing and manufacturing-retail and distribution, household consumption) by EU Member State. The food loss and waste values are modelled results (extracted from [Sala and De Laurentiis, (2024)]- Food waste estimates model results -model version 3.0-) that enable comparative temporal analysis (series 2003–2022) and the assessment of trends and socioeconomic and demographic drivers of FLW. This information is suitable to identify critical stages in the food chain and to support policy design for prevention and reduction of food waste.

##### *Main data sources to produce the data*

Socioeconomic and demographic drivers were downloaded from [Eurostat database] except for BMI, which was downloaded from [WHO].

##### *Article*

No article

##### *Temporal and spatial coverage*

Spatial coverage: At country level for EU member states: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czechia, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden. 

Temporal coverage: 2003-2022.

Supply chain stages: Primary Production, Processing and manufacturing & retail distribution, Household consumption.

##### *Data*

Ferrer-Pérez, Hugo; Philippidis, George (2025): EU Food Loss and Waste (FLW) Panel Data (2003–2022): Estimates and Drivers. Agrifood Center of Aragon (CITA) [Dataset: Zenodo ([https://doi.org/10.5281/zenodo.17483053])].

##### *Visualization*

No applies

### Food availability

##### *Description*

Food availability, measured in kilocalories per day in the FAO Food Balance Sheets, is a proxy for food demand and frequently used by global simulation models, such as GLOBIOM, MAGNET and CAPRI to make food demand projections. Food availability data and projections will be prepared by major food groups and at country level. Some of the models present projections for different socio-economic groups, taking into account differences in dietary patterns across age and sex.

##### *Main data sources to produce the data*

FAO Food Balance Sheets combined with model simulation.

##### *Article*

TBD

##### *Temporal and spatial coverage*

Temporal coverage: 2017-2050. Spatial coverage: Global, EU member states.

##### *Resolution*

Country

##### *Data*

##### *Visualization*

                   
### Food affordability 

##### *Description*

The Cost and Affordability of a Healthy Diet (CoAHD) framework (Herforth et al., 2022) combines computations on the costs of a nutritionally adequate and healthy diet with information on household income distribution to estimate whether people can afford such a diet. Two approaches were used to produce statistics and projections for the prevalence (PUA) and number of people (NUA) that cannot afford a healthy diet. The first one is a micro-level analysis that combines EU27 household surveys with detailed price data to estimate food unaffordability at micro-level. The second one is a macro-level analysis that uses the MAGNET model to generate PUA and NUA projections at global-level.

##### *Main data sources to produce the data*

Micro-analysis: EU-SILC household surveys, EU household budget surveys, EU price data
Macro-analysis: MAGNET model

##### *Article*

TBD

##### *Temporal and spatial coverage*

Micro-analysis: Temporal coverage: 2010-2023. Spatial coverage: EU member states.
Macro-analysis: Temporal coverage: 2017-2050. Spatial coverage: Global, EU member states.

##### *Resolution*

Micro-analysis: Country, household types.
Macro-analysis: Country

##### *Data*

TBD

##### *Visualization*

TBD


### Food stability

To Be Added


### Food waste

To Be Added                    
                   
### Diet quality

##### *Description*

A first indicator is the share of calories derived from fruit and vegetables provides insight in a food group which makes a key contribution in improving diet-related health and consumption of which needs to increase in all countries (d’Croz et al., 2019). A second indicator traces the share of plant-based foods in total protein consumption, based on the same household intake variable as the calorie indicators but zooming in on another macro nutrient. This indirectly measures changes in importance of animal sourced foods, recommendations for which are less uniform globally. In some low-income countries animal sourced food intake is below recommended levels in national food based dietary guidelines. Interpretation of this indicator thus needs to take national context into account.

##### *Main data sources to produce the data*

MAGNET model

##### *Article*

TBD

##### *Temporal and spatial coverage*

Temporal coverage: 2017-2050. Spatial coverage: Global, EU member states.

##### *Resolution*

Country

##### *Data*

TBD

##### *Visualization*

TBD

                   
## Health             
                   
### Life expectancy

TO BE ADDED

### *Obesity*

##### *Description*
This paper estimates the health and environmental benefits from reducing sugar intake in EU households. A CGE model is modified by linking probability density functions of body mass index for EU populations to a complete demand system with nutrition accounting. Following the WHO recommendation, sugar intake is reduced to 10% of total dietary energy intake, whilst two further scenarios explore more ambitious targets of 7.5% and 5%. This dietary transition leads to a relative reduction in overweight and obese EU adults of between 8 and 15 million by 2050, with potentially significant health gains in Scandinavia. Environmental ‘footprints’ reveal relative land and emissions savings of up to 56m2 and 20 kgCO2e per capita per year by 2050. With scientific evidence supporting a virtuous circle of improved health, higher wages and increased macroeconomic performance, the reported negative impacts on economic indicators in this study could be reversed through targeted redistributive policies.

##### *Main data sources to produce the data*

European Health Information Survey (EHIS) sample microdata with information on individual heights and weights to generate BMI population distributions of body mass index (BMI) for each of the European Union (EU) member states, SSP2 database, MAGNET model

##### *Article*

Philippidis, G., & Sanjuán-López, A. I. (2025). An ex-ante study on the impacts of reduced EU sugar consumption: a sweet mix of health and environmental benefits. Economic Systems Research, 37(2), 196-222. [https://doi.org/10.1080/09535314.2024.2429378]

##### *Temporal and spatial coverage*

Spatial coverage: EU member states. 

Temporal coverage: 2019-2050. Spatial coverage: Global, EU member states.

##### *Resolution*

Country

##### *Data*

Nation-wide European Health Information Survey (EHIS) microdata wave 2019. MAGNET

##### *Visualization*

Not applicable


### Animal welfare

#### Poultry Welfare

##### *Description*

Adding the suffering of chicken through the integration of the [Welfare Footprint Project](https://welfarefootprint.org/broilers/) into the [IMAGE-land](https://models.pbl.nl/image/Framework_overview) poultry module to calculate the years of annoying, hurtful, disabling and excruciating pain broiler poultry is suffering in industrial production.

##### *Temporal and spatial coverage*

Spatial Coverage: Global
Temporal Coverage: 1970 - 2100

##### *Resolution*

5 ArcMin Grid and 27 IMAGE-regions

##### *Data*

To be published

##### *Visualization*

To be published

                   
## Economy            

### Sectoral employment

##### *Description*

The data on the employment by occupation and by sector in the MAGNET database have been refined as part of better capturing sector variability in wages (see section on sectoral wages). The initial number of workers is constructed by using the total number of employed workers from ILOSTAT and two sources of sectoral wage patterns. To project the number of workers per occupation class, projections for the working-age population, which is defined as all persons aged 15 and older from the SSP Database, were combined with new projections for the labour force participation rate, defined as the number of persons in the labour force as a percentage of the working-age population, and the share of workers per occupation class. Depending on the scenario assumptions and demand and supply, the workers are endogenously allocated to different sectors by the MAGNET model. 


##### *Main data sources to produce the data*

IMPACTecon, ILO, World Bank wage database, SSP database, MAGNET model

##### *Article*

TBD

##### *Temporal and spatial coverage*

Temporal coverage: 2017-2050. Spatial coverage: Global, EU member states.

##### *Resolution*

Country and sector.

##### *Data*

TBD

##### *Visualization*

TBD

### Sectoral value added

TO BE ADDED

### Sectoral wages

##### *Description*

Wages per worker (by occupation, sector and region) are computed post-simulation in the MAGNET model. Starting point is the disposable wage per worker computed by dividing disposable income by sector and occupation by the number of workers. Disposable income is the after-tax income a worker could spend on savings and consumption and therefore corresponds to expenditure-based income and poverty measures used in analyses on household surveys. The disposable income (EVOS variable) is part of the standard GTAP model described in (Corong et al., 2017). Employment by sector, a MAGNET-specific variable, described above. Deflating the nominal wages from the MAGNET model  to real  wages in 2017 PPP $ and expressing them per day allows direct comparison to the current international poverty lines. Using wages in international dollars also provides a better comparison of wages across regions by accounting for differences in purchasing power. 

##### *Main data sources to produce the data*

MAGNET model

##### *Article*

TBD

##### *Temporal and spatial coverage*

Temporal coverage: 2017-2050. Spatial coverage: Global, EU member states.

##### *Resolution*

Country

##### *Data*

TBD

##### *Visualization*

TBD

### Market organization

TBD

### Trade

TO BE ADDED

### Energy access

TO BE ADDED                   

                   
## Social equity    

### Income distribution

##### *Description*

Two approaches were used to produce statistics and projections on income distribution. The first one is a microsimulation approach that combines EU27 household surveys with MAGNET projections to produce household level estimations of income distribution and poverty. The second one is a macro-level analysis that uses wage projections from the MAGNET model to generate measures on wage income distribution, which can be used as a proxy for disposable income. The Palma ratio provides insight in the distribution of labour income. It is computed as the share of the income of the richest 10 percent divided by the income of the poorest 40 percent. An increase in the Palma ratio thus signals an increase in inequality of labour income. The Palma ratio is preferred over the GINI indicator as empirical data indicate that changes in income occur mostly at the tails of the distribution. The GINI coefficient tends to be insensitive to these shifts between the richest and the poorest, falsely suggesting a stable income distribution. The Palma ratio in contrast focuses on the tails where empirically changes in income distribution have occurred (Cobham et al., 2016). 

##### *Main data sources to produce the data*

Micro-analysis: EU-SILC household surveys, MAGNET model
Macro-analysis: MAGNET model

##### *Article*

TBD

##### *Temporal and spatial coverage*

Micro-analysis: Temporal coverage: 2017-2050. Spatial coverage: EU member states.
Macro-analysis: Temporal coverage: 2017-2050. Spatial coverage: Global, EU member states.

##### *Resolution*

Micro-analysis: Country, household types.
Macro-analysis: Country

##### *Data*

TBD

##### *Visualization*

TBD

### *Education*

##### *Description*

Educational attainment is proxied by the post-secondary education rate among individuals aged 25–29. An ex‑post analysis of its determinants, using a double‑lasso approach, show that economic growth, lower agricultural employment, higher education expenditure and trade openness, raise post-secondary education attainment rates amongst 25–29-year-olds. Projections from the Wittgenstein Centre are subsequently integrated into the MAGNET model. When these projections are combined with the elasticities derived from the econometric analysis, a global‑slowdown scenario yields a deterioration in the indicator.

##### *Main data sources to produce the data*

Wittgenstein Centre for demography and global human capital, World Population Prospects, SSP database, World Development Indicators.

##### *Article*

Revise and Resubmit

##### *Temporal and spatial coverage*

Spatial coverage: European countries (EU Member States plus Norway, Switzerland, and the United Kingdom). 

Temporal coverage: 1995-2040.

##### *Resolution*

Country

##### *Data*

Garcés, I., Philippidis, G., Sanjuán, A. I., & Xavier Álvarez, R. (2026). Bridging ex-post and ex-ante EU social indicator trends: An explorative modelling analysis for SDG4 and SDG5 (Versión v1) [Data set]. BrightSpace Horizon Europe project GA Nr. 101060075. [https://doi.org/10.5281/zenodo.18630283]

##### *Visualization*

Not applicable


### *Gender equality*

##### *Description*

As an indicator of gender equality, we employ the unadjusted gender pay gap reported in Eurostat’s Sustainable Development Goal 5 (SDG 5) database. The gender wage gap is defined as the difference between the average gross hourly earnings of male and female employees, expressed relative to the average gross hourly earnings of men. The ex-post analysis of the drivers of this measure, conducted via double lasso approach identifies several factor with a reduction in the gender wage gap: higher economic growth, increases in agricultural employment, greater average years of schooling, a lower concentration of income among both the richest and poorest deciles, and a smaller number of large urban agglomerations. Projections for this indicator are obtained by combining MAGNET GDP projections, mean years of schooling from Wittgenstein database and in house projections for the additional drivers. These projections are introduced in MAGNET and a simulation of a global slowdown scenario indicates deterioration in the gender inequality indicator.    

##### *Main data sources to produce the data*

Wittgenstein Centre for demography and global human capital, World Population Prospects, SSP database, World Development Indicators, EUROSTAT SDG database, MAGNET GDP projections.

##### *Article*

Revise and Resubmit

##### *Temporal and spatial coverage*

Spatial coverage: European countries (EU Member States plus Norway, Switzerland, and the United Kingdom).

Temporal coverage: 2002-2040.

##### *Resolution*

Country

##### *Data*

Garcés, I., Philippidis, G., Sanjuán, A. I., & Xavier Álvarez, R. (2026). Bridging ex-post and ex-ante EU social indicator trends: An explorative modelling analysis for SDG4 and SDG5 (Versión v1) [Data set]. BrightSpace Horizon Europe project GA Nr. 101060075. [https://doi.org/10.5281/zenodo.18630283]

##### *Visualization*

Not applicable



[FADN SPATIAL]: https://humusklimanetz-couch.thuenen.de/fadn-spatial/
[https://verify.lsce.ipsl.fr/]: https://verify.lsce.ipsl.fr/
[D3.1 Report on stocktake of requirements and technical specifications for the LUM policy database]: https://www.lamasus.eu/wp-content/uploads/LAMASUS_D3.1-Report-on-Stocktake-of-Requirements-and-Technical-Specifications-for-the-LUM-Policy-Database.pdf
[LAMASUS project]: https://www.lamasus.eu/
[https://doi.org/10.1016/j.envsoft.2016.04.028]: https://doi.org/10.1016/j.envsoft.2016.04.028
[https://doi.org/10.2760/624482]: https://doi.org/10.2760/624482
[https://doi.org/10.5281/zenodo.17483053]: https://doi.org/10.5281/zenodo.17483053
[Eurostat database]: https://ec.europa.eu/eurostat/web/main/data/database
[WHO]: https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index
[Sala and De Laurentiis, (2024)]: http://data.europa.eu/89h/1f450ba2-d844-4873-8161-7f210a70474e
[https://doi.org/10.5281/zenodo.18630283]: https://doi.org/10.5281/zenodo.18630283
[https://doi.org/10.1080/09535314.2024.2429378]: https://doi.org/10.1080/09535314.2024.2429378
