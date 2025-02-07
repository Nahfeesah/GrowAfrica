import { Box, Flex, Text,  } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";


const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k+`;
    return num;
};


 const StatItem = ({ targetNumber, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let speed = targetNumber / 50; // Adjust speed based on the number size
        let interval = setInterval(() => {
            setCount((prev) => {
                if (prev + speed >= targetNumber) {
                    clearInterval(interval);
                    return targetNumber;
                }
                return prev + speed;
            });
        }, 20); // Runs every 20ms for a smooth effect

        return () => clearInterval(interval);
    }, [targetNumber]);

    return (
        <Box textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" color="gray.800">
                {formatNumber(Math.floor(count))}
            </Text>
            <Text fontSize="md" color="gray.500">
                {label}
            </Text>
        </Box>
    );
};

export default StatItem