.PHONY: build-dev
build-dev: ## Build the development docker image.
	docker compose -p oh-my-reviewer-dev -f compose.yaml build

.PHONY: start-dev
start-dev: ## Start the development docker container in detached mode.
	docker compose -p oh-my-reviewer-dev -f compose.yaml up -d

.PHONY: watch-dev
watch-dev: ## Start the development docker container in watch mode.
	docker compose -p oh-my-reviewer-dev -f compose.yaml up -w

.PHONY: stop-dev
stop-dev: ## Stop the development docker container.
	docker compose -p oh-my-reviewer-dev -f compose.yaml down