deploy:
	cd web && yarn build && cd .. && firebase deploy
