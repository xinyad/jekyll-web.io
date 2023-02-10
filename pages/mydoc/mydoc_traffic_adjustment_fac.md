---
title: Traffic Adjustment Data Factors
sidebar: mydoc_sidebar
permalink: mydoc_traffic_adjustment_fac.html
folder: mydoc
output: 
  ioslides_presentation:
    mathjax: "http://example.com/mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML"

---
<br>
<div style="text-align: justify"> The two traffic adjustment factors, Seasonal and Axle Correction, are calculated by
the TDA Office and can be accessed through either the Traffic Characteristics
Inventory (TCI) database or the Florida Traffic Online (FTO) website
(www.tdaappsprod.dot.state.fl.us/fto/). Both TCI and FTO contain current and
historical information. Continuous counts and seasonal classification counts provide
the necessary information to establish traffic adjustment factors. In the absence of
any continuous counts within a county, TDA applies seasonal factors from adjacent
counties and develops seasonal factors for those counties. These adjustment factors
are later applied to the short-term counts to estimate AADT, K, D, and T factors.
Actual AADT, K, D, and T data are collected from permanent, continuous counters.
Figure 2-3 shows the process of developing traffic adjustment factors and applying
them to estimate AADT and other traffic parameters from short-term traffic counts.</div>
<br>
<span style="color:red">***IMPORTANT NOTE:***</span>

<font size="2">All short-term counts need to be adjusted using Seasonal Factors, but only
short-term counts obtained from portable axle counters need to be adjusted
using Axle Correction Factors.</font>

### **2.5.1 <span style="color:#0a69bb">Seasonal Factor (SF)</span>**

<div style="text-align: justify"> All short-term counts must be adjusted to reflect the seasonal changes in traffic
volumes. The TDA Office determines the Seasonal Factor Category using traffic data
collected from permanent count locations. The FDOT districts assign a Seasonal
Factor Category to each short-term traffic count site. The basic assumption is that
seasonal variability and traffic characteristics of short-term and permanent
continuous counts are similar.</div>

<div style="text-align: justify"> The Monthly Seasonal Factor (MSF) for a particular month at a particular location is
derived from the Annual Average Daily Traffic (AADT) for a location divided by the
Monthly Average Daily Traffic (MADT) for a specific month at that count site as
shown in Equation 2-1.</div><br>



<div style="background:linear-gradient(to right, white 10%, #b0c4de 50%, white 90%)">
<center><b>Equarion 2-1</b></center>
</div>

$$MSF=\frac{AADT}{MADT}$$

<div style="text-align: justify"> Weekly Seasonal Factors (SF) are developed by interpolating
between the monthly factors for two consecutive months as
shown in Equation 2-2. The SFs are calculated for each week of
the year for each continuous count station and recorded in a
Peak Season Factor Report available on FTO website.</div><br>

<div style="background:linear-gradient(to right, white 10%, #b0c4de 50%, white 90%)">
<center><b>Equarion 2-2</b></center>
</div>

$$SF=MSF_i + \frac{MSF_{i+1}-MSF_i}{N}\times{n}$$

Where:
 
$$SF$$ =  Weekly Seasonal Factor

$$MSF_i$$  =  Monthly Seasonal Factor for a particular month The MSFs are assigned to the week of the year that contains the midpoint of the month

$$MSF_{i+1}$$  =  Monthly Seasonal Factor for the following month i+1

$$N$$  =  Number of weeks between the midpoint of month i and the midpoint of the following month i+1, usually 4

$$n$$  =  Number of weeks between the midpoint of the month i and the week for SF, usually between 1 and 4

### **2.5.2 <span style="color:#0a69bb">Standard K Factor (SF)</span>**

<div style="text-align: justify"> The K factor is defined as the proportion of AADT occurring in the peak hour. It is one
of the most critical traffic factors in roadway planning and design. The K factor is
often referred to as the Design Hour Factor as it relates to the proportion of the
AADT during the design hour for the design year. The Design Hour Volume (DHV) is
total traffic in both directions expected to occur during the design hour for the
design year, and it is determined by multiplying the AADT by the K factor. Equation
2-4 shows the relationship between AADT, DHV, and K:</div><br>


<div style="background:linear-gradient(to right, white 10%, #b0c4de 50%, white 90%)">
<center><b>Equarion 2-3</b></center>
</div>

$$DHV = AADT\times{K}$$

<div style="text-align: justify"> Based on comprehensive analyses and extensive public outreach, FDOT has
established statewide “Standard K Factors” that should be applied to develop project
traffic forecast from the planning phase through the design phase of the project.
Standard K Factors are fixed K parameters predetermined based on area type and
facility type with consideration to typical peak periods of the day. The Standard K
Factors also reflect urban development patterns and economic activities. FDOT’s
recommended standard K factors are presented in Table 2-1. The Standard K Factors
are also reported in the [FDOT Traffic Information Online Web Application](https://link-url-here.org). Use of statewide Standard K Factors promotes better transportation policies and projects,
reduces time and effort developing peak hour numbers, offers consistency and
simplicity, and represents a sensible approach relating to development and
transportation improvements.</div>

<span style="color:red">***IMPORTANT NOTE:***</span>

<font size="2">There is not a single Standard K Factor to be applied to every roadway in
the state; however, there are multiple standard K factors depending
upon the area type and facility type.</font>

<span style="color:red">***IMPORTANT NOTE:***</span>

<font size="2">Standard K Factors for planning and design analyses are not directly applicable to toll facilities.</font>

<br>
<div style="text-align: justify"> Special considerations exist in urban and urbanized areas; both are addressed in the
footnotes of Table 2-1. In the state’s largest urbanized areas, FDOT has designated
“core” freeways. These are major, non-toll freeways going into/through the urbanized
core areas (i.e., I-4 in the Orlando area). As these freeways pass through an urbanized
area, the Standard K Factors generally range from 8.0% to 9.0%, depending upon
proximity to the central core or central business district. Standard K Factors for these
freeways are set and typically updated every ten years as part of the
urban/urbanized area boundary process. A 7.5% K factor is applicable for state
arterials and highways in approved Multimodal Transportation Districts (MMTD),
where secondary priority is given to auto vehicle movements. This lower factor
represents the promotion of a multi-hour peak period rather than a single peak hour
analysis. The same K factor as the project roadway on the state highway system is
applied to intersecting roadways that are non-state maintained unless other values
are derived from special counts.
There are also cases where Standard K Factors may not directly apply. Examples
include highway facilities in tourist areas or roadways providing access to cruise
ports where heaviest traffic may occur on the weekend and peak-to-daily ratios are
higher than the Standard K Factors. In such cases, short-term traffic counts that
include both weekdays and weekends should be collected. K Factors should be
developed by analyzing the short-term traffic counts and relevant.
traffic information from Florida Traffic Information Online, if available. The project
team should present the analysis results and recommendations to FDOT Central
Office for approval.</div>

### **Table 2-1 FDOT Standard K Factors**


<style>
table {
  border-collapse: collapse;
  width: 100%;
  /* display: table-cell; */
}

th, td {
  text-align: center;
  vertical-align: middle;
  border-color: #96D4D4;
  padding: 8px;
  width: 25%; 

}

tr:nth-child(even) {
  background-color:  #EEF2F8;
}
</style>

<table>
  <tr>
  <th>Area
(Population)</th>
  <th>Facility Type</th>
  <th>Standard K Factor (% AADT)*</th>
  <th>Representative Time Period</th>
  </tr>
  <tr>
  <td rowspan=2 bgcolor=white>Large Urbanized Areas with Core Freeways (1,000,000+)</td>
  <td>Freeways</td>
  <td>8.0 - 9.0 ***</td>
  <td>Typical weekday peak period or hour</td>
  </tr>
  <tr>
  
  <td>Arterials &amp; Highways</td>
  <td>9.0 **</td>
  <td>Typical weekday peak hour</td>
  </tr>
  <tr>
  <td rowspan=2 bgcolor=white>Other Urbanized Areas (50,000+)</td>
  <td>Freeways</td>
  <td>9.0 **</td>
  <td>Typical weekday
peak hour</td>
  </tr>
  <tr>

  <td>Arterials &amp;
Highways</td>
  <td> </td>
  <td> </td>
  </tr>

  <tr>
  <td rowspan=2 bgcolor=white>Transitioning to Urbanized Areas (Uncertain)</td>
  <td>Freeways</td>
  <td>8.0 - 9.0 ***</td>
  <td>Typical weekday
peak period or
hour</td>
  </tr>

  <tr>
  
  <td>Arterials &amp; Highways</td>
  <td> </td>
  <td> </td>
  </tr>

  <tr>
  <td rowspan=2 bgcolor=white>Urban (5,000-50,000)</td>
  <td>Freeways</td>
  <td>10.5</td>
  <td>100th highest hour of the year</td>
  </tr>
  <tr>
  
  <td>Arterials &amp; Highways</td>
  <td>9.0 **</td>
  <td>Typical weekday peak hour</td>
  </tr>

  <tr>
  <td rowspan=3 bgcolor=white>Rural (&lt;5,000)</td>
  <td>Freeways</td>
  <td>10.5</td>
  <td>100th highest hour of the year</td>
  </tr>
  <tr>
  
  <td>Arterials</td>
  <td>9.5 **</td>
  <td> </td>
  </tr>

  <tr>
  
  <td>Highways</td>
  <td>9.5</td>
  <td> </td>
  </tr>
</table>

* Some smoothing of values at area boundaries/edges would be
* Value is 7.5% in approved Multimodal Transportation Districts where
automobile movements are deemphasized. This lower value represents an
extensive multi-hour peak period rather than a peak hour.
* Value is 8.0% for FDOT-designated urbanized core freeways and may
either be 8.5% or 9.0% for non-core freeways. Values less than 9% essentially
represent a multi-hour peak period rather than a peak hour.

<span style="color:red">***IMPORTANT NOTE:***</span>

<div style="text-align: justify"> <font size="2">FDOT has adopted a Context Classification System comprising eight
context classifications in its efforts to plan, design, construct, and
operate a context-sensitive system of Complete Streets. The context
classification of a roadway, together with its transportation
characteristics, will provide information about the users along the
roadway, the regional and local travel demand of the roadway, and the
challenges and opportunities of each user. The context classification of a
roadway should be considered when selecting a Standard K Factor for</font></div>