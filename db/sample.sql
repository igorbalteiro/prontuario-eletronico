SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;

CREATE TABLE `patients` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `telephone` varchar(13) NOT NULL,
  `birthDate` varchar(10) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `height` int NOT NULL,
  `weight` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `schedules` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `patientName` varchar(100) NOT NULL,
  `date` varchar(16) NOT NULL,
  `description` LONGTEXT,
  `patientID` int(255),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_PatientID` FOREIGN KEY (`patientID`) REFERENCES patients(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

COMMIT;
