-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2025 at 05:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(4) NOT NULL,
  `name` varchar(150) NOT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`, `img`) VALUES
(1, 'Indoor Plants', 'ind.png'),
(2, 'Outdoor Plants', 'out.png'),
(3, 'Succulents Plants', 'scc.png\r\n'),
(4, 'Cacti Plants', 'cacti.png'),
(5, 'Flowering Plants', 'flw.png'),
(6, 'Herbs Plants', 'hrbs.png');

-- --------------------------------------------------------

--
-- Table structure for table `plants`
--

CREATE TABLE `plants` (
  `plantID` int(4) NOT NULL,
  `categoryID` int(4) NOT NULL,
  `name` varchar(255) NOT NULL,
  `scientificName` varchar(255) NOT NULL,
  `code` varchar(20) NOT NULL,
  `isAvailable` varchar(10) NOT NULL DEFAULT 'true'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plants`
--

INSERT INTO `plants` (`plantID`, `categoryID`, `name`, `scientificName`, `code`, `isAvailable`) VALUES
(1, 1, 'Bonsai Money Plant', 'Pachira aquatica', 'BNS-MP', 'true'),
(2, 1, 'Bucida Buceras', 'Bucida Buceras', 'BCD', 'true'),
(3, 1, 'Zenzi ZZ', 'Zamioculcas zamiifolia', 'ZZ', 'true'),
(4, 1, 'Everfresh', 'Pithecellobium confertum', 'EVRFRSH', 'true'),
(5, 1, 'Sensation Plant', 'Spathiphyllum Sensation', 'SNSTN', 'true'),
(6, 1, 'Peace Lily', 'Spathiphyllum', 'PCLLY', 'true'),
(7, 2, 'Yellow Snake Plant', 'Sansevieria trifasciata Laurentii', 'SNKPL', 'true'),
(8, 2, 'Fortune Plant', 'Dracaena fragrans', 'FTNPL', 'true'),
(9, 2, 'Croton', 'Codiaeum variegatum', 'CRTN', 'true'),
(10, 2, 'Butterfly Palm', 'Dypsis lutescens', 'BFYPLM', 'true'),
(11, 2, 'Dracaena Anita', 'Dracaena deremensis Anita', 'DRCN', 'true'),
(12, 3, 'Echeveria Goldfish', 'Echeveria \'Goldfish', 'ECVGDF', 'true'),
(13, 3, 'Echeveria Linde Anna', 'Echeveria \'Linde Anna\'', 'ECVLNA', 'true'),
(14, 3, 'Sedum Treleasei', 'Sedum treleasei', 'SDMTLS', 'true'),
(15, 3, 'Echeveria Firely', 'Echeveria Firely\'', 'ECVFRL', 'true'),
(16, 3, 'Pachyphytum \'Apricot Beauty\'', 'Pachyphytum \'Apricot Beauty\'', 'PCHAPB', 'true'),
(17, 3, 'Aeonium Aquaman', 'Aeonium hybrid \'Aquaman\'', 'AEAQMN', 'true'),
(18, 3, 'x Pachyveria \'Bubble Candy\'', 'x Pachyveria \'Bubble Candy\'', 'PCHBBL', 'true'),
(19, 3, 'Echeveria Cubic Frost', 'Echeveria \'Cubic Frost\'', 'ECCFST', 'true'),
(20, 3, 'Graptopetalum Rainbow Candy (Rare)', 'Graptopetalum hybrid \'Rainbow Candy\'', 'GPRBCN', 'true'),
(21, 3, 'Echeveria \'Snow Angel\'', 'Echeveria \'Snow Angel\'', 'ECSANG', 'true'),
(22, 4, 'Bunny Ear Cactus Yellow', 'Opuntia microdasys var. albispina', 'BYC-BR', 'true'),
(23, 4, 'Opuntia Monacantha', 'Opuntia monacantha', 'OPM', 'true'),
(24, 4, 'White Bunny Ears', 'Opuntia microdasys var. albata', 'WBE', 'true'),
(25, 4, 'Ladyfinger Cactus', 'Mammillaria elongata', 'LFC', 'true'),
(26, 5, 'Coral Anthurium', 'Anthurium andraeanum \'Coral\'', 'CRLANT', 'true'),
(27, 5, 'Pink Anthurium', 'Anthurium andraeanum \'Pink\'', 'PNKANT', 'true'),
(28, 5, 'Petite Pink Orchid', 'Phalaenopsis \'Petite Pink\'', 'PNKORCH', 'true'),
(29, 5, 'Red Anthurium', 'Anthurium andraeanum \'Red\'', 'RDANT', 'true'),
(30, 5, 'Sunrise Orchid', 'Phalaenopsis \'Sunrise\'', 'SRSORCH', 'true'),
(31, 5, 'Bromeliad Antonio Pink', 'Guzmania \'Antonio Pink\'', 'BRMLD', 'true'),
(32, 5, 'Petite Sunset Orchid', 'Phalaenopsis \'Petite Sunset\'', 'PTSSORC007', 'true'),
(33, 5, 'White Orchid', 'Phalaenopsis amabilis', 'WHTORCH', 'true'),
(34, 5, 'Yellow Orchid', 'Phalaenopsis amabilis', 'YLWORCH', 'true'),
(35, 5, 'Dark Purple Orchid', 'Phalaenopsis schilleriana', 'DKPORCH', 'true'),
(36, 5, 'Double Orchid', 'Phalaenopsis Hybrid', 'DBLORCH', 'true'),
(37, 6, 'Chocolate Mint', 'Mentha × piperita f. citrata', 'CHCLTMT', 'true'),
(38, 6, 'Citronella Grass', 'Cymbopogon nardus', 'CTNLL', 'true'),
(39, 6, 'Citronella Malvarosa', 'Pelargonium graveolens', 'CTLLMAL', 'true'),
(40, 6, 'Dill', 'Anethum graveolens', 'DLL', 'true'),
(41, 6, 'Gotu-Kola', 'Centella asiatica', 'GTKL', 'true'),
(42, 6, 'Green Tea', 'Camellia sinensis', 'GRT', 'true'),
(43, 6, 'Lavender', 'Lavandula angustifolia', 'LAVND', 'true'),
(44, 6, 'Lemon Balm', 'Melissa officinalis', 'LMNBLM', 'true'),
(45, 6, 'Lemon Mint', 'Mentha × piperita citrata', 'LMNMT', 'true'),
(46, 6, 'Parsley', 'Petroselinum crispum', 'PRSLY', 'true'),
(47, 6, 'Rosemary', 'Salvia rosmarinus', 'RSMRY', 'true'),
(48, 6, 'Sweet Basil', 'Ocimum basilicum', 'SWTTBSL', 'true'),
(49, 6, 'Thai Basil', 'Ocimum basilicum var. thyrsiflora', 'THBSL', 'true'),
(50, 6, 'Thyme', 'Thymus vulgaris', 'THYM', 'true');

-- --------------------------------------------------------

--
-- Table structure for table `potdetails`
--

CREATE TABLE `potdetails` (
  `potDetailsID` int(4) NOT NULL,
  `name` varchar(150) NOT NULL,
  `code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `potdetails`
--

INSERT INTO `potdetails` (`potDetailsID`, `name`, `code`) VALUES
(1, 'Ecopots', 'ECPT'),
(2, 'Nursery Pot', 'NRSY-PT');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `sizeID` int(4) NOT NULL,
  `name` varchar(150) NOT NULL,
  `code` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`sizeID`, `name`, `code`) VALUES
(1, 'Extra Extra Small', 'XXS'),
(2, 'Extra Small', 'XS'),
(3, 'Small', 'S'),
(4, 'Medium', 'MD'),
(5, 'Large', 'LG'),
(6, 'Extra Large', 'XL');

-- --------------------------------------------------------

--
-- Table structure for table `sizesdetails`
--

CREATE TABLE `sizesdetails` (
  `sizeDetailsID` int(11) NOT NULL,
  `plantID` int(4) NOT NULL,
  `potDetailsID` int(4) NOT NULL,
  `img` varchar(300) NOT NULL,
  `price` float NOT NULL,
  `sizeID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sizesdetails`
--

INSERT INTO `sizesdetails` (`sizeDetailsID`, `plantID`, `potDetailsID`, `img`, `price`, `sizeID`) VALUES
(1, 1, 1, 'bns-xs.png', 300, 2),
(2, 1, 1, 'bns-m2.png', 1700, 4),
(3, 1, 2, 'bns-np-md.png', 1000, 4),
(4, 2, 1, 'bns-lg.png', 4800, 4),
(5, 2, 2, 'bns-b-m.png', 2800, 4),
(6, 2, 2, 'bns-b-m.png', 3800, 5),
(7, 3, 1, 'zz-xs.png', 900, 2),
(8, 3, 1, 'zz-lg.png', 1900, 5),
(9, 4, 1, 'ev-s.png', 1700, 3),
(10, 4, 1, 'ev-m.png', 3500, 4),
(11, 4, 2, 'ev-l.png', 9500, 5),
(12, 5, 1, 's-m.png', 1600, 4),
(13, 5, 2, 's-l.png', 4000, 5),
(14, 6, 1, 'lly-s.png', 1000, 3),
(15, 6, 2, 'lly-xl.png', 3300, 6),
(16, 7, 1, 'snk-s.png', 850, 3),
(17, 7, 1, 'snk-l.png', 1400, 5),
(18, 8, 1, 'ftn-xxs.png', 530, 1),
(19, 9, 2, 'crtn-s.png', 300, 3),
(20, 10, 2, 'btfy-m.png', 1000, 4),
(21, 10, 2, 'btfy-m2.png', 1200, 4),
(22, 10, 1, 'btfy-l.png', 4500, 5),
(23, 11, 2, 'd-l1.png', 1950, 5),
(24, 11, 1, 'd-l2.png', 3250, 5),
(25, 12, 2, 'scc-s.png', 120, 1),
(26, 13, 2, 'linde-anna.png', 115, 1),
(27, 14, 2, 'sedum-treleasei.png', 100, 1),
(28, 15, 2, 'Echeveria-Firefly.png', 125, 1),
(29, 16, 2, 'p.png', 180, 1),
(30, 16, 2, 'ap-4in.png', 280, 3),
(31, 17, 2, 'Aeonium-Aquaman.png', 99, 1),
(32, 17, 2, 'aq-4in.png', 199, 3),
(33, 18, 2, 'bubble.png', 105, 1),
(34, 19, 2, 'cubic.png', 99, 1),
(35, 20, 2, 'candy.png', 125, 1),
(36, 21, 2, 'echeveria-snow-angel.png', 110, 1),
(37, 22, 2, 'cy.png', 150, 3),
(38, 23, 2, 'o.png', 140, 3),
(39, 24, 2, 'white.png', 160, 3),
(40, 25, 2, 'ldy.png', 130, 3),
(41, 26, 2, 'crl.png', 280, 3),
(42, 27, 2, 'pnk.png', 290, 3),
(43, 28, 2, 'pnk-orch.png', 320, 3),
(44, 29, 2, 'rd.png', 275, 3),
(45, 30, 2, 'srs.png', 330, 3),
(46, 31, 2, 'brm.png', 300, 3),
(47, 32, 2, 'pnkorch.png', 335, 3),
(48, 33, 2, 'orchmini.png', 350, 1),
(49, 33, 2, 'orchwh.png', 450, 3),
(50, 34, 2, 'ylworch.png', 380, 3),
(51, 35, 2, 'dporch.png', 420, 3),
(52, 36, 2, 'dbl-sm.png', 500, 3),
(53, 36, 2, 'dbl-lg.png', 820, 5),
(54, 37, 2, 'chcmt-sm.png', 120, 3),
(55, 38, 2, 'Citronella2.png', 180, 4),
(56, 39, 2, 'Citronella-Malvarosa.png', 190, 4),
(57, 40, 2, 'Dill.png', 100, 3),
(58, 41, 2, 'Gotu-Kola.png', 130, 3),
(59, 42, 2, 'grnntea.png', 200, 4),
(60, 43, 2, 'lavender.png', 150, 3),
(61, 44, 2, 'lemon-balm.png', 140, 3),
(62, 45, 2, 'lemon.png', 120, 3),
(63, 46, 2, 'Parsley.png', 140, 4),
(64, 47, 2, 'rosemary.png', 180, 5),
(65, 48, 2, 'sweet-basil.png', 130, 4),
(66, 49, 2, 'thai-basil.png', 150, 4),
(67, 50, 2, 'thyme.png', 125, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `plants`
--
ALTER TABLE `plants`
  ADD PRIMARY KEY (`plantID`);

--
-- Indexes for table `potdetails`
--
ALTER TABLE `potdetails`
  ADD PRIMARY KEY (`potDetailsID`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`sizeID`);

--
-- Indexes for table `sizesdetails`
--
ALTER TABLE `sizesdetails`
  ADD PRIMARY KEY (`sizeDetailsID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `plants`
--
ALTER TABLE `plants`
  MODIFY `plantID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `potdetails`
--
ALTER TABLE `potdetails`
  MODIFY `potDetailsID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `sizeID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
