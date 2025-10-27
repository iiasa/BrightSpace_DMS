# Just Operating Space (JOS) thematic

## Farm resilience

### Farm income

#### *Approach: FADN spatial - Downscaling*

##### *Description*
FADN subsidies are part of farm income. As these data is only accessible at farm level, a down scaling approach has been developed and applied.

Data is protected (more than 15 obs. per observation unit).

##### *Main data sources to produce the data*

* Individual FADN data
* Farm Structure Spatial Units (FSU) established in the VERIFY project ([link_FSU])
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

### Obesity

##### *Description*

Two partly overlapping approaches were developed to create an overweight and obesity indicator in MAGNET. The first approach employs nation-wide European Health Information Survey (EHIS) sample microdata with information on individual heights and weights to generate BMI population distributions of body mass index (BMI) for each of the European Union (EU) member states. The second approach has less detail on the EU but has the advantage that it has global coverage and therefore can also be applied to assess changes in overweight and obesity in other countries (e.g. trade-partners) that are affected by EU (trade) policies. It builds on the work of Springmann, Wiebe, et al. (2018), who projected the prevalence of overweight and obesity by estimating the relationship between total calorie energy consumption and mean BMI in combination with assumptions on the distribution of BMI. This approach is extended by estimating an hierarchical general additive model (HGAM), which relates historical information on GDP per capita, kilocalorie and demographic change to parameters of that determine the distribution of BMI.

##### *Main data sources to produce the data*

Historical data on mean BMI and BMI distribution, SSP2 database, MAGNET model

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

### Animal welfare

TO BE ADDED

                   
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

### Education

##### *Description*

As an indicator for education, the post-secondary educational attainment rate between 25-29 year old was selected. Projections for this indicator are produced by combining MAGNET projections with a lasso regression analysis approach that estimates the relationship between the education indicator and key drivers.

##### *Main data sources to produce the data*

World Population Prospects, SSP database, World Development Indicators, EUROSTAT SDG database, MAGNET projections.

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

### Gender equality

##### *Description*

As an indicator for gender equality, the former, the gender wage gap, defined as the difference between average gross hourly earnings of male and female employees, divided by the average gross hourly earnings of male employees, was selected. Projections for this indicator are produced by combining MAGNET projections with a lasso regression analysis approach that estimates the relationship between the gender wage gap and key drivers.

##### *Main data sources to produce the data*

World Population Prospects, SSP database, World Development Indicators, EUROSTAT SDG database, MAGNET projections.

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


[FADN SPATIAL]: https://humusklimanetz-couch.thuenen.de/fadn-spatial/
[link_FSU]: https://verify.lsce.ipsl.fr/
[D3.1 Report on stocktake of requirements and technical specifications for the LUM policy database]: https://www.lamasus.eu/wp-content/uploads/LAMASUS_D3.1-Report-on-Stocktake-of-Requirements-and-Technical-Specifications-for-the-LUM-Policy-Database.pdf
[LAMASUS project]: https://www.lamasus.eu/
[https://doi.org/10.1016/j.envsoft.2016.04.028]: https://doi.org/10.1016/j.envsoft.2016.04.028
[https://doi.org/10.2760/624482]: https://doi.org/10.2760/624482
