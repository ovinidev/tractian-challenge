import {
	Table,
	Thead,
	Tbody,
	Tr,
	Flex,
	Image,
	TableContainer,
} from "@chakra-ui/react";
import { THead } from "@components/Table/THead";
import { TData } from "@components/Table/TData";
import { useAssets } from "@queries/assets";
import { Button } from "@components/Buttons/Button";
import { useNavigate } from "react-router-dom";

export const AssetsHealthTable = () => {
	const { data: assets } = useAssets({ name: "" });
	const navigate = useNavigate();

	return (
		<Flex direction="column" align="center" bg="#ffffff" p="1.5rem">
			<Flex align="center" direction={{ base: "column", xl: "row" }}>
				{assets && <Image src={assets[0].image} alt="motor" h="11rem" />}

				<TableContainer ml="1rem">
					<Table variant="striped" colorScheme="messenger" size="md">
						<Thead>
							<Tr>
								<THead>Nome</THead>
								<THead>Saúde</THead>
							</Tr>
						</Thead>
						<Tbody>
							{assets
								?.map((asset) => {
									return (
										<Tr key={asset.id}>
											<TData fontSize="18">{asset.name}</TData>
											<TData fontSize="18">{asset.healthscore}%</TData>
										</Tr>
									);
								})
								.slice(0, 3)}
						</Tbody>
					</Table>
				</TableContainer>
			</Flex>

			<Button
				onClick={() => navigate("/motores")}
				w={{ base: "17rem", xl: "32rem" }}
				text="Ver mais motores"
				bg="primary"
				color="gray.100"
				mt="2rem"
			/>
		</Flex>
	);
};
