import React from 'react';
import { Box, Typography, Grid, Divider, Button } from '@mui/material';
import './safestreetnyc.css'; // Use the same CSS for consistent styling

const SafeStreetNYC = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="logo-section">
        <img
          src="/image/safestreetlogo.png" // Replace with the SafeStreetNYC logo file path
          alt="SafeStreetNYC Logo"
          className="company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            SafeStreetNYC: Housing, Safety, and Healthcare Insights for NYC
          </Typography>
          <Typography variant="body1" className="section-description">
          New York is the world’s largest city by population and as such, the day-to-day experiences of New Yorkers vary vastly. For someone trying to move or visit to New York, there will definitely be concerns around whether the neighborhoods/boroughs they choose to locate to are safe and proximate to key services such as healthcare. The application we create will compile data on NY house/Airbnb prices, crime rates, healthcare locations and demographics, and allow users to find different metrics in each of these fields based on location.
        </Typography>
        <Typography variant="body1" className="section-description">
        <b>Some of the questions we hope to address include</b>
        <ul>
            <li>
              <Typography variant="body2">
              Which Airbnb or Housing is best for me given my preferences for safety, access to healthcare and price?
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
              What hospitals do I have near the Airbnb or Housing I am looking for?
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
              What is the frequency and common crime types that happened near the Airbnb or Housing I am looking for?
              </Typography>
            </li>
            
          </ul>

      </Typography>
     
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">👩🏻‍💻 Role</Typography>
              <Typography variant="body2" className="overview-value">
                Frontend Developer
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">⏰ Timeline</Typography>
              <Typography variant="body2" className="overview-value">
                March 2023 - May 2023
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">🔧 Tools Used</Typography>
              <Typography variant="body2" className="overview-value">
                React.js, Google Maps API, MySQL, DynamoDB
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>



  {/* GitHub Button */}
  <Box className="github-button-section">
        <div className="container">
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/chapiniwei50/SafeStreetNYC"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Github 👀
          </Button>
        </div>
      </Box>


      {/* Demo Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🎥 Demo
          </Typography>
          <Typography variant="body1" className="section-description">
            Watch a demo of SafeStreetNYC in action:
          </Typography>
          <div className="video-container">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/p8X7T2L7yPg"
              title="SafeStreetNYC Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Box>

      {/* Features Section */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
          📑 Web App Pages Description
          </Typography>
          <Typography variant="body1" className="section-description">
          Our website has several pages, which have functionality detailed below:        </Typography>
        <Typography variant="body1" className="section-description">
        <b>Login Page</b>
        <ul>
            <li>
              <Typography variant="body2">
              This page allows users to create an account/login to our application.              </Typography>
            </li>
           
            
          </ul>
      </Typography>

      <Typography variant="body1" className="section-description">
        <b>Front Page</b>
        <ul>
            <li>
              <Typography variant="body2">
              This is the landing page which users reach after logging in, and includes a logo, introduction message and links to the other pages of our website.    
              </Typography>        
              </li>
            
          </ul>
      </Typography>
          
      <Typography variant="body1" className="section-description">
        <b>Airbnb Page</b>
        <ul>
            <li>
              <Typography variant="body2">
              This page allows users to input a preferred neighborhood, as well as their preferences for safety, healthcare and price. Upon clicking enter, users are able to see the best Airbnbs based on their preferences (and the top 10 are displayed on a map). We also simultaneously return the available room types in that neighborhood, as well as that neighborhood’s demographic breakdown by race and gender, and average price level as a proportion of New York’s average              </Typography>        
              </li>
              <li>
              <Typography variant="body2">
              Users also have the option of clicking on an given Airbnb, and we return a list of other Airbnbs with similar price, healthcare access and crime rate in the same borough
                            </Typography>        
              </li>
            
          </ul>
      </Typography>

      <Typography variant="body1" className="section-description">
        <b>Housing Page</b>
        <ul>
            <li>
              <Typography variant="body2">
              This page allows users to input a preferred neighborhood, as well as their preferences for safety, healthcare and price. Upon clicking enter, users are able to see the best housing options based on their preferences (and the top 10 are displayed on a map).
                             </Typography>        
              </li>
              <li>
              <Typography variant="body2">
              We also simultaneously return the neighborhood’s demographic breakdown by race and gender, and average price level as a proportion of New York’s average
                            </Typography>        
              </li>
            
          </ul>
      </Typography>

      <Typography variant="body1" className="section-description">
        <b>Hospitals Page</b>
        <ul>
            <li>
              <Typography variant="body2">
              We allow users to search for a type of hospital, e.g. ‘nursing’, and we return a list of hospital locations which match that criteria
                             </Typography>        
              </li>
            
          </ul>
      </Typography>

      <Typography variant="body1" className="section-description">
        <b>Nearby Hospital and Crime Page</b>
        <ul>
            <li>
              <Typography variant="body2">
              Users input any address in New York, and a radius which they want to find information for. We return a list of nearby hospitals, as well as statistics on the types of crime which occur within the given radius and their frequency
                             </Typography>        
              </li>
            
          </ul>
      </Typography>


      
          
          
          
        </div>
      </Box>

      {/* Technology Section */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🕹️ Technology 
          </Typography>
          <Typography variant="body1" className="section-description">
       
        <ul>
            <li>
              <b>DB</b>
              <Typography variant="body2">
              We used a MySQL database to hold the majority of our data. We had a JavaScript server run routes and retrieve information from our database. The account informations are stored in NoSQL DynamoDB database.                            
               </Typography>        
              </li>

              <li>
              <b>Frontend</b>
              <Typography variant="body2">
              For our frontend, we used React.js, and also incorporated Google Maps API to display some of our results and allow for greater interactiveness in our application.               </Typography>        
              </li>

              <li>
              <b>Backend</b>
              <Typography variant="body2">
              For the backend, we used JS connected with MySQL (with AWS RDS) and DynamoDB.
             
              </Typography>     
              </li> 

              <li>
              <b>Login Security</b>
              <Typography variant="body2">
              Finally, for our login features, in addition to the default login method, we implemented Google and Facebook login, and stored our user credentials in DynamoDB with password hashed using SHA 256. We also used APIs from Google Maps, Facebook Login, and Google Login.             
              </Typography>     
              </li> 
          </ul>
      </Typography>
        </div>
      </Box>


      <Box className="Database-section">
  <div className="container">
    <Typography variant="h5" className="section-title">
      💾 Database
    </Typography>
    <Typography variant="body1" className="section-description">
      In total, we used data from 6 sources. Of these, 1 was from Kaggle, 1 was from GitHub, and 4 were from the official City of New York data records. A summary of the data is provided below:
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>NY Property Sales</b> (Rows: 513K, Columns: 29) | NYC Citywide Annualized Calendar Sales Update
      <ul>
        <li>
          This dataset includes data on property sales in New York from 2016 to 2021, detailing important information such as the sale price, date, location, building age, and type.
        </li>
        <li>
          Used to provide a baseline estimate of mean property prices in different neighborhoods and recommend favorable locations/properties based on user preferences for neighborhood, safety, price, and healthcare access.
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>NYC Airbnb</b> (Rows: 68,653, Columns: 23) | Airbnb-NYC-Cleaned | Kaggle
      <ul>
        <li>
          Contains data on Airbnb listings in New York, including listing price, location, and house rules.
        </li>
        <li>
          Used for Airbnb recommendations based on user preferences for neighborhood, safety, price, and healthcare access.
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>NYC Crime</b> (Rows: 5.5M, Columns: 19) | NYPD Arrests Data (Historic)
      <ul>
        <li>
          Includes data on all crimes in New York since 2016, with details like crime type, location, and time.
        </li>
        <li>
          Used to quantify safety by analyzing proximity to crime for Airbnbs or property locations.
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>NYC Demographics</b> (Rows: 236, Columns: 46) | Demographic Statistics By Zip Code | NYC Open Data
      <ul>
        <li>
          Data on the demographics of all ZIP codes in New York, including population by sex and ethnicity.
        </li>
        <li>
          Used for demographic breakdowns of neighborhoods and identifying similar neighborhoods.
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>NYC Hospital</b> (Rows: 78, Columns: 15) | NYC Health + Hospitals Patient Care Locations
      <ul>
        <li>
          Details significant healthcare locations in New York, including name, type, and contact information.
        </li>
        <li>
          Used to assess access to healthcare facilities and rank locations based on healthcare proximity.
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>NYC Zip Codes/Neighborhoods/Boroughs</b> (Rows: 178, Columns: 3) | NYC Housing ZIP Codes
      <ul>
        <li>
          Links ZIP codes with neighborhoods and boroughs, serving as a utility database for queries.
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Data Processing</b>
      <ul>
        <li>
          Cleaned smaller datasets using Excel by removing redundant columns and standardizing values.
        </li>
        <li>
          Processed larger datasets with Python and Pandas/Numpy, performing tasks like removing columns, standardizing values, and removing invalid data.
        </li>
        <li>
          Example code for data cleaning is included in the final submission, though not all original code was retained.
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>ER Diagram</b>
    </Typography>
    <img src="/image/ER_Diagram.jpg" alt="ER Diagram" className="diagram-image" />

    <Typography variant="body1" className="section-description">
      <b>Proof of BCNF</b>
      <ul>
        <li>
          Longitude and latitude are used in conjunction with neighborhood, borough, address, and ZIP code. However, lifting these dependencies to separate tables is computationally infeasible due to the precision of longitude and latitude.
        </li>
        <li>
          Other functional dependencies are sufficiently normalized.
        </li>
      </ul>
    </Typography>
  </div>
</Box>

<Box className="Tablenames-section">
  <div className="container">
    <Typography variant="h5" className="section-title">
      🧩 Table Names
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Airbnb</b>
      <ul>
        <li>
          <Typography variant="body2">
            Property_Id determines all of the other attributes, as each Airbnb is unique. Property_Id serves as a superkey for the relation, so Airbnb is in BCNF (if we ignore the longitude/latitude dependencies stipulated above).
          </Typography>
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Crimes</b>
      <ul>
        <li>
          <Typography variant="body2">
            Arrest_Key determines all of the other attributes, as each arrest is unique. Arrest_Key serves as a superkey for the relation, so Crimes is in BCNF (if we ignore the longitude/latitude dependencies stipulated above).
          </Typography>
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Property_Sales</b>
      <ul>
        <li>
          <Typography variant="body2">
            ID determines all of the other attributes, as each sale is unique. ID serves as a superkey for the relation, so Property_Sales is in BCNF (if we ignore the longitude/latitude dependencies stipulated above).
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Apartment_Number, Address, Total Units, Year_Built, and Square_Feet cannot really be functionally dependent on one another due to the complex range of property sales. For the same address, it is possible the entire building is being sold, or just one unit. A unit may also appear multiple times with different Year_Built and Square_Feet due to development.
          </Typography>
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Hospitals</b>
      <ul>
        <li>
          <Typography variant="body2">
            Facility_Name and Facility_Type determine all of the other attributes, as each specific facility name/type has its unique locations and phone number. Facility_Name and Facility_Type serve as a superkey for the relation, so Hospitals is in BCNF.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Facility_Name alone cannot serve as the superkey, as some facilities appear in our relation multiple times with different functions (e.g., the emergency room vs. the children’s hospital).
          </Typography>
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Demographics</b>
      <ul>
        <li>
          <Typography variant="body2">
            ZIP_Code determines all of the other attributes, as each ZIP code has its own unique demographics. ZIP_Code serves as a superkey for the relation, so Demographics is in BCNF.
          </Typography>
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Zip_Code_Neighbourhood</b>
      <ul>
        <li>
          <Typography variant="body2">
            ZIP_Code determines all of the other attributes, as each ZIP code has its own unique neighborhood and borough. ZIP_Code serves as a superkey for the relation, so Zip_Code_Neighbourhood is in BCNF.
          </Typography>
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Boroughs</b>
      <ul>
        <li>
          <Typography variant="body2">
            This table only has one column and hence no functional dependencies, so it is trivially in BCNF.
          </Typography>
        </li>
      </ul>
    </Typography>
  </div>
</Box>


<Box className="api-section">
  <div className="container">
    <Typography variant="h5" className="section-title">
      📟 API Specification
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Route: /getneighborhooddemographics/:neighborhood</b>
      <ul>
        <li><b>Description:</b> For a given neighborhood, returns the demographics of that neighborhood.</li>
        <li><b>Route Parameters:</b> neighborhood (string)</li>
        <li><b>Example Input:</b> neighborhood = “Chelsea”</li>
        <li><b>Query Parameters:</b> None</li>
        <li><b>Response Parameters:</b> PCT_Male, PCT_Female, PCT_American_Indian, PCT_Asian, PCT_Black, PCT_Latino, PCT_Pacific_Islander, PCT_White, PCT_Other_Ethnicity (all decimals)</li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Route: /gethospitaltype</b>
      <ul>
        <li><b>Description:</b> Returns info on hospitals catering to a specific group of patients.</li>
        <li><b>Route Parameters:</b> None</li>
        <li><b>Query Parameters:</b> Facility_Type (string)</li>
        <li><b>Response Parameters:</b> Name (string), Location (string), Phone (string), Latitude (decimal), Longitude (decimal)</li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Route: /getlocalcrime</b>
      <ul>
        <li><b>Description:</b> Returns the descriptions of crimes which have occurred within some distance from a given location.</li>
        <li><b>Route Parameters:</b> None</li>
        <li><b>Query Parameters:</b> latitude (decimal), longitude (decimal), distance (int)</li>
        <li><b>Response Parameters:</b> Descriptions (string), frequency of each type (int)</li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Route: /getlocalhospitals</b>
      <ul>
        <li><b>Description:</b> Returns information on the types of hospitals and their frequencies within a specified distance from a given location.</li>
        <li><b>Route Parameters:</b> None</li>
        <li><b>Query Parameters:</b> longitude (decimal), latitude (decimal), search radius (int)</li>
        <li><b>Response Parameters:</b> Facility_Type (string), Count (int)</li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Route: /getrankhousing</b>
      <ul>
        <li><b>Description:</b> Queries and ranks the best housing based on the user preference of low crime rate, healthcare, or price.</li>
        <li><b>Route Parameters:</b> None</li>
        <li><b>Query Parameters:</b> healthcare_weight (float), safety_weight (float), price_weight (float), Neighborhood (string)</li>
        <li><b>Response Parameters:</b> address (string), rank_address (float)</li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Route: /getrankairbnb</b>
      <ul>
        <li><b>Description:</b> Queries and ranks the best Airbnbs based on the user preference of low crime rate, healthcare, or price.</li>
        <li><b>Route Parameters:</b> None</li>
        <li><b>Query Parameters:</b> healthcare_weight (float), safety_weight (float), price_weight (float), Neighborhood (string)</li>
        <li><b>Response Parameters:</b> address (string), rank_address (float)</li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Route: /getavailablerooms</b>
      <ul>
        <li><b>Description:</b> Finds the most common types of rooms available for rent in the given neighborhood, along with the percentage of listings with instant bookability.</li>
        <li><b>Route Parameters:</b> None</li>
        <li><b>Query Parameters:</b> given_neighborhood (string)</li>
        <li><b>Response Parameters:</b> room_type (string), room_count (int), bookability_percentage (float)</li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Route: /findsimilarairbnbsbyprice</b>
      <ul>
        <li><b>Description:</b> Queries for other Airbnb listings available in the same neighborhood and price range as the specified Airbnb.</li>
        <li><b>Route Parameters:</b> None</li>
        <li><b>Query Parameters:</b> given_property (int)</li>
        <li><b>Example Input:</b> given_property = 1001012</li>
        <li><b>Response Parameters:</b> property_id (int), price (float), room_type (string)</li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>Route: /findsimilarbypricecrimehospitalborough</b>
      <ul>
        <li><b>Description:</b> Queries for other Airbnb properties in the same neighborhood with similar prices and the crime rate in that borough.</li>
        <li><b>Route Parameters:</b> None</li>
        <li><b>Query Parameters:</b> given_property (int)</li>
        <li><b>Response Parameters:</b> property_id (int), price (float), room_type (string)</li>
      </ul>
    </Typography>
  </div>
</Box>


<Box className="technical-challenges-section">
  <div className="container">
    <Typography variant="h5" className="section-title">
      😥 Technical Challenges
    </Typography>

    <Typography variant="body1" className="section-description">
      During the development of SafeStreetNYC, we encountered several technical challenges, which we addressed with various strategies:
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>1. Extremely Large Datasets</b>
      <ul>
        <li>
          Many of the datasets we used were extremely large, which made certain queries intractable.
        </li>
        <li>
          To address this, we reduced the size of these datasets by selecting only the most essential data. For example, we only considered crimes that occurred in or after 2019.
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>2. Complex Queries</b>
      <ul>
        <li>
          Some queries were highly complex and difficult to optimize for real-time performance.
        </li>
        <li>
          To improve efficiency, we occasionally compromised the accuracy of our results. For instance, instead of comparing all houses in a neighborhood with all local crimes, we used a sample of crimes to approximate crime statistics for different areas.
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>3. GitHub Merge Errors</b>
      <ul>
        <li>
          Errors frequently arose while pushing and pulling code changes on GitHub, particularly during merges.
        </li>
        <li>
          To mitigate these issues, we worked on separate branches and communicated closely before merging. For smaller fixes, we sometimes resorted to manually copying and pasting code.
        </li>
      </ul>
    </Typography>

    <Typography variant="body1" className="section-description">
      <b>4. Sensitive Information</b>
      <ul>
        <li>
          Secret keys and sensitive information needed to be securely stored.
        </li>
        <li>
          We stored this information in `.env` files and added these files to `.gitignore` to prevent them from being uploaded to version control.
        </li>
      </ul>
    </Typography>
  </div>
</Box>


      <Box className="technical-challenges-section">
        <div className="container">
         
        </div>
      </Box>
    </Box>
  );
};

export default SafeStreetNYC;
