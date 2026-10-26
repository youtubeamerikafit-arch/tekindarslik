SELECT kategoriya, COUNT(*) AS mahsulot_soni, ROUND(AVG(narx),2) AS ortacha_narx
FROM mahsulotlar GROUP BY kategoriya ORDER BY ortacha_narx DESC, kategoriya;
