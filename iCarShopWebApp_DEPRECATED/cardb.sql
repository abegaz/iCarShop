-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2018 at 10:24 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cardb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `Admin_id` varchar(50) NOT NULL,
  `Last_login` date DEFAULT NULL,
  `First_name` varchar(50) DEFAULT NULL,
  `Middle_init` varchar(1) DEFAULT NULL,
  `Last_name` varchar(50) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Rank` varchar(50) DEFAULT NULL,
  `Date_of_birth` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`Admin_id`, `Last_login`, `First_name`, `Middle_init`, `Last_name`, `Email`, `Address`, `Rank`, `Date_of_birth`) VALUES
('A0001', '2018-10-15', 'John', 'D', 'Rockefeller', 'Jrock@standardoil.com', 'Mount Pleasant, NY', 'Tier I', '1839-07-08'),
('A0002', '2018-10-10', 'Callie', 'W', 'Hapsburg', 'HRE@euromail.biz', 'Miami, FL', 'Tier I', '1900-10-10'),
('A0003', '2018-10-12', 'Emma', 'K', 'Greaves', 'Emma94@aol.net', 'San Diego, CA', 'Tier II', '1994-12-24'),
('A0004', '2000-08-04', 'Bill', 'J', 'Williamson', 'BWill@gmail.com', 'Buffalo, NY', 'Tier III', '1980-04-13');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `Client_id` varchar(50) NOT NULL,
  `Date_added` date DEFAULT NULL,
  `Last_login` date DEFAULT NULL,
  `First_name` varchar(50) DEFAULT NULL,
  `Middle_init` varchar(1) DEFAULT NULL,
  `Last_name` varchar(50) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Date_of_birth` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`Client_id`, `Date_added`, `Last_login`, `First_name`, `Middle_init`, `Last_name`, `Email`, `Address`, `Date_of_birth`) VALUES
('johnny2857', '2018-10-03', '2018-10-04', 'johnny', 'c', 'cash', 'bigJ79@gmail.com', '2245 Hill Dr.', '1979-03-19'),
('mil2356', '2018-10-07', '2018-10-09', 'steve', 'a', 'miller', 'miller89@gmail.com', '2325 Wykeshire Ct.', '1989-01-05'),
('morton2819', '2018-10-02', '2018-10-04', 'morton', 'a', 'harket', 'harket73@gmail.com', '4520 Woodstock Dr.', '1973-03-02'),
('optimus2342', '2018-10-10', '2018-10-13', 'optimus', 'r', 'prime', 'optp95@gmail.com', '1525 Cheshire Rd.', '1995-09-16'),
('zombie1327', '2018-10-15', '2018-10-16', 'rob', 'f', 'zombie', 'zombie68@gmail.com', '2450 Churchhill Downs Rd.', '1968-11-15');

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `vin` varchar(17) NOT NULL,
  `make` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `year` varchar(50) DEFAULT NULL,
  `body` varchar(50) DEFAULT NULL,
  `price` int(50) DEFAULT NULL,
  `mileage` int(50) DEFAULT NULL,
  `interior_color` varchar(50) DEFAULT NULL,
  `exterior_color` varchar(50) DEFAULT NULL,
  `used` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`vin`, `make`, `model`, `year`, `body`, `price`, `mileage`, `interior_color`, `exterior_color`, `used`) VALUES
('1GT221E82BZ257165', 'Ford', 'Ranger', '1990', 'Two Door Pickup', 30000, 10000, 'Black', 'Red', 'Used Vehicle'),
('3D7MA46C14G198277', 'Chevrolet', 'Silverado', '2018', 'Four Door Pickup', 55000, 0, 'Brown', 'Blue', 'New Vehicle'),
('JKBVNMH158A015052', 'Hyundai', 'Tuscon', '2019', 'Four Door SUV', 35000, 0, 'Grey', 'Orange', 'New Vehicle'),
('JTEHH20V316013659', 'Toyota', 'Camry', '1992', 'Four Door Sedan', 12000, 15000, 'Grey', 'Green', 'Used Vehicle'),
('WVWRU63BX5E018494', 'Lexus', 'GS', '2019', 'Four Door SUV', 45000, 0, 'Grey', 'Yellow', 'New Vehicle');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`Admin_id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`Client_id`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`vin`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
