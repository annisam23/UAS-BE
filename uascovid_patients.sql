-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 02, 2023 at 02:14 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uascovid_patients`
--

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` bigint(11) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `address` text NOT NULL,
  `status` enum('positive','recovered','dead') NOT NULL,
  `in_date_at` date DEFAULT NULL,
  `out_date_at` date NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `phone`, `address`, `status`, `in_date_at`, `out_date_at`, `timestamp`) VALUES
(1, 'AnnisaMaulida', '085156576824', 'Jl.Raya Margonda', 'recovered', '2022-11-12', '2022-11-20', '2023-01-02 04:49:39'),
(2, 'muhammad Yunus', '08978239460', 'Jl.Raya Citayam', 'dead', '2022-12-12', '2022-12-20', '2023-01-02 04:50:39'),
(3, 'muhammad Ihsan', '0827239460', 'Jl.Raya Tajur', 'positive', '2022-10-07', '2022-12-30', '2023-01-02 04:51:22'),
(4, 'Siti Nur Kaffah', '0827239460', 'Jl.Raya Imam bonjol', 'recovered', '2022-06-07', '2022-06-30', '2023-01-02 04:52:01'),
(5, 'Siti Nurhasahan', '0823885542', 'Jl.Raya Bogor', 'positive', '2022-05-20', '2022-05-30', '2023-01-02 04:53:04'),
(6, 'Sulastri', '08882361442', 'Jl.Raya Ciawi', 'dead', '2022-01-20', '2022-01-31', '2023-01-02 04:53:42'),
(7, 'nisa', '08111126326', 'Jl.Raya Puncak', 'dead', '2022-01-01', '2022-02-11', '2023-01-02 05:01:46'),
(9, 'testing apussz', '09787177672', 'hmmmm', 'dead', '2023-01-01', '2023-01-10', '2023-01-02 05:03:19'),
(10, 'Dedeh', '0815728372', 'Jl.Raya Cicurug', 'positive', '2023-11-01', '2023-11-15', '2023-01-02 06:47:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` bigint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
