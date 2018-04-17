# node_bitcoin

 nodemon .\bin\server.js


banco de dados script

-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 17-Abr-2018 às 04:50
-- Versão do servidor: 5.7.11
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quaresma`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cotacao`
--

CREATE TABLE `cotacao` (
  `id` int(11) NOT NULL,
  `moeda` varchar(30) NOT NULL,
  `valor` double NOT NULL,
  `data` datetime NOT NULL,
  `exchange` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cotacao`
--

INSERT INTO `cotacao` (`id`, `moeda`, `valor`, `data`, `exchange`) VALUES
(1, 'USDT_BTC', 8033.01701192, '2018-04-16 00:00:00', NULL),
(2, 'USDT_BTC', 8035.62138427, '2018-04-16 00:00:00', NULL),
(3, 'USDT_BTC', 8044.68237745, '2018-04-16 00:00:00', NULL),
(4, 'USDT_BTC', 8044.68237745, '2018-04-16 00:00:00', NULL),
(5, 'USDT_BTC', 8045.69938935, '2018-04-16 00:00:00', NULL),
(6, 'USDT_BTC', 8045.92198938, '2018-04-16 21:31:02', NULL),
(7, 'USDT_BTC', 8046.12720391, '2018-04-16 21:32:02', NULL),
(8, 'USDT_BTC', 8050, '2018-04-16 21:33:01', NULL),
(9, 'USDT_BTC', 8051, '2018-04-16 21:38:01', NULL),
(10, 'USDT_BTC', 8045.71639858, '2018-04-16 21:40:01', NULL),
(11, 'USDT_BTC', 8045.68237811, '2018-04-16 21:41:02', NULL),
(12, 'USDT_BTC', 8045.68237811, '2018-04-16 21:42:02', NULL),
(13, 'USDT_BTC', 8050.99999999, '2018-04-16 21:43:02', NULL),
(14, 'USDT_BTC', 8045.68237812, '2018-04-16 21:44:02', NULL),
(15, 'USDT_BTC', 8045.68237811, '2018-04-16 21:45:01', NULL),
(16, 'USDT_BTC', 8045.68237811, '2018-04-16 21:46:01', NULL),
(17, 'USDT_BTC', 8045.68237811, '2018-04-16 21:49:01', NULL),
(18, 'USDT_BTC', 8045.68237826, '2018-04-16 21:50:03', NULL),
(19, 'USDT_BTC', 8045.69938954, '2018-04-16 21:51:02', NULL),
(20, 'USDT_BTC', 8045.68237811, '2018-04-16 21:52:01', NULL),
(21, 'USDT_BTC', 8044.68237745, '2018-04-16 22:01:07', NULL),
(22, 'USDT_BTC', 8044.7844404, '2018-04-16 22:03:02', NULL),
(23, 'USDT_BTC', 8045.01700835, '2018-04-16 22:04:01', NULL),
(24, 'USDT_BTC', 8045.2, '2018-04-16 22:05:01', NULL),
(25, 'USDT_BTC', 8045.55904136, '2018-04-16 22:06:05', NULL),
(26, 'USDT_BTC', 8051.06103147, '2018-04-16 22:09:02', NULL),
(27, 'USDT_BTC', 8051.09505399, '2018-04-16 22:10:02', NULL),
(28, 'USDT_BTC', 8052.15455772, '2018-04-16 22:12:01', NULL),
(29, 'USDT_BTC', 8056.92267886, '2018-04-16 22:13:02', NULL),
(30, 'USDT_BTC', 8064.8, '2018-04-16 22:14:01', NULL),
(31, 'USDT_BTC', 8053.45488047, '2018-04-16 22:15:02', NULL),
(32, 'USDT_BTC', 8053.74625192, '2018-04-16 22:16:02', NULL),
(33, 'USDT_BTC', 8057.48731165, '2018-04-16 22:18:01', NULL),
(34, 'USDT_BTC', 8025.48449338, '2018-04-16 22:50:01', NULL),
(35, 'USDT_BTC', 8025.44051106, '2018-04-16 22:53:01', NULL),
(36, 'USDT_BTC', 8025.88428345, '2018-04-16 22:54:01', NULL),
(37, 'USDT_BTC', 8025.89084729, '2018-04-16 22:55:02', NULL),
(38, 'USDT_BTC', 8025.1972448, '2018-04-16 22:56:01', NULL),
(39, 'USDT_BTC', 8024.11064027, '2018-04-16 22:58:01', NULL),
(40, 'USDT_BTC', 8025, '2018-04-16 22:59:03', NULL),
(41, 'USDT_BTC', 8035.95681987, '2018-04-16 23:01:02', NULL),
(42, 'USDT_BTC', 8035.95681987, '2018-04-16 23:02:07', NULL),
(43, 'USDT_BTC', 8035.95681987, '2018-04-16 23:03:02', NULL),
(44, 'USDT_BTC', 8035.95681987, '2018-04-16 23:04:02', NULL),
(45, 'USDT_BTC', 8025, '2018-04-16 23:05:03', NULL),
(46, 'USDT_BTC', 8024.05924696, '2018-04-16 23:06:02', NULL),
(47, 'USDT_BTC', 8033.95681987, '2018-04-16 23:11:46', NULL),
(48, 'USDT_BTC', 8021.38449323, '2018-04-16 23:12:01', NULL),
(49, 'USDT_BTC', 8033.79999997, '2018-04-16 23:15:02', NULL),
(50, 'USDT_BTC', 7994.6788682, '2018-04-16 23:41:01', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ordem`
--

CREATE TABLE `ordem` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `data` date NOT NULL,
  `qtdbtc` double NOT NULL,
  `valor_por_btc` double NOT NULL,
  `tipo` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ordem`
--

INSERT INTO `ordem` (`id`, `usuario_id`, `data`, `qtdbtc`, `valor_por_btc`, `tipo`) VALUES
(1, 30, '2018-04-16', 1, 8000, 'COMPRAR');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `senha` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `nome`, `cpf`, `email`, `senha`) VALUES
(30, 'rafael teste', '544752', 'rafa@teste.com', 'bcb4da728e21c1fca089f11eb213fb23'),
(29, 'haha', '454545659', 'teste@teste.com', '69a06f72c917a99cca3613167c685e7f');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cotacao`
--
ALTER TABLE `cotacao`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ordem`
--
ALTER TABLE `ordem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cotacao`
--
ALTER TABLE `cotacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT for table `ordem`
--
ALTER TABLE `ordem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

