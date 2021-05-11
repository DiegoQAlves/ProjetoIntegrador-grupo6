CREATE TABLE `AdsSites` (
	`ID` INT NOT NULL,
	`SiteID` INT NULL,
	`Link` VARCHAR(50) NULL,
	`AdsSite` VARCHAR(50) NULL,
	`WhenAdd` DATETIME NULL
);

CREATE TABLE `AudienceInterestsCategories` (
	`ID` INT NOT NULL,
	`SiteID` INT NULL,
	`Link` VARCHAR(50) NULL,
	`Category` VARCHAR(150) NULL
);

CREATE TABLE `Contacts` (
	`ID` INT NOT NULL,
	`SiteID` INT NULL,
	`LInk` VARCHAR(100) NULL,
	`Contact` VARCHAR(50) NULL,
	`Type` VARCHAR(50) NULL
);

CREATE TABLE `CountriesTraffic` (
	`ID` INT NOT NULL,
	`SiteID` INT NULL,
	`Link` VARCHAR(50) NULL,
	`Country` VARCHAR(50) NULL,
	`Share` FLOAT NULL
);

CREATE TABLE `Keywords` (
	`ID` INT NOT NULL,
	`SiteID` INT NULL,
	`Link` VARCHAR(50) NULL,
	`Keyword` VARCHAR(200) NULL,
	`KeywordType` VARCHAR(50) NULL
);

CREATE TABLE `Links` (
	`ID` INT NOT NULL,
	`Link` VARCHAR(150) NULL,
	`Zone` VARCHAR(15) NULL,
	`Title` VARCHAR(300) NULL,
	`TimeOnSite` TIME NULL,
	`PageViews` FLOAT NULL,
	`BounceRate` FLOAT NULL,
	`Countries` VARCHAR(4000) NULL,
	`TrafficSources_Direct` FLOAT NULL,
	`TrafficSources_Refferals` FLOAT NULL,
	`TrafficSources_Search` FLOAT NULL,
	`TrafficSources_Social` FLOAT NULL,
	`TrafficSources_Mail` FLOAT NULL,
	`TrafficSources_Display` FLOAT NULL,
	`TopRefferingSites` VARCHAR(4000) NULL,
	`TopDestinationSites` VARCHAR(4000) NULL,
	`OrganicSearches` FLOAT NULL,
	`PaidSearches` FLOAT NULL,
	`OrganicKeywords` VARCHAR(4000) NULL,
	`PaidKeywords` VARCHAR(4000) NULL,
	`SocialTrafficSources` VARCHAR(4000) NULL,
	`AdsSites` VARCHAR(4000) NULL,
	`InterestsCategories` VARCHAR(4000) NULL,
	`AlsoVisitedWebsites` VARCHAR(4000) NULL,
	`RelevantTopicsForSiteVisitors` VARCHAR(4000) NULL,
	`SimilarSitesByRank` VARCHAR(4000) NULL,
	`SimilarSitesBySimilarity` VARCHAR(4000) NULL,
	`Visitors_01_2016` INT NULL,
	`Visitors_12_2015` INT NULL,
	`Visitors_11_2015` INT NULL,
	`Visitors_10_2015` INT NULL,
	`Visitors_09_2015` INT NULL,
	`Visitors_08_2015` INT NULL,
	`Category1` VARCHAR(100) NULL,
	`Category2` VARCHAR(100) NULL,
	`Category3` VARCHAR(100) NULL,
	`YandexIndex` INT NULL,
	`YandexIndexParsed` DATETIME NULL
);

CREATE TABLE `SocialTraffic` (
	`ID` INT NOT NULL,
	`SiteID` INT NULL,
	`Link` VARCHAR(50) NULL,
	`Site` VARCHAR(50) NULL,
	`Share` FLOAT NULL
);

CREATE TABLE `Traffic` (
	`ID` INT NOT NULL,
	`SiteID` INT NULL,
	`Link` VARCHAR(100) NULL,
	`Visitors_01_2016` INT NULL,
	`Views_01_2016` INT NULL,
	`ViewsMainPage_01_2016` INT NULL,
	`Visitors_12_2015` INT NULL,
	`Views_12_2015` INT NULL,
	`ViewsMainPage_12_2015` INT NULL,
	`Visitors_11_2015` INT NULL,
	`Views_11_2015` INT NULL,
	`ViewsMainPage_11_2015` INT NULL,
	`Visitors_10_2015` INT NULL,
	`Views_10_2015` INT NULL,
	`ViewsMainPage_10_2015` INT NULL,
	`Visitors_09_2015` INT NULL,
	`Views_09_2015` INT NULL,
	`ViewsMainPage_09_2015` INT NULL,
	`Visitors_08_2015` INT NULL,
	`Views_08_2015` INT NULL,
	`ViewsMainPage_08_2015` INT NULL
);

CREATE TABLE `VisitoresRelevantesTopics` (
	`ID` INT NOT NULL,
	`SiteID` INT NULL,
	`Link` VARCHAR(50) NULL,
	`Topic` VARCHAR(200) NULL,
	`Weight` FLOAT NULL
);

